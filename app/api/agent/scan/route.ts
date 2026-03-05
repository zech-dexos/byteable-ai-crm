import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { subDays } from 'date-fns';

export async function POST() {
  try {
    // 1. Find deals that haven't been updated in 3 days
    const threeDaysAgo = subDays(new Date(), 3);
    
    const staleDeals = await prisma.deal.findMany({
      where: {
        updatedAt: {
          lt: threeDaysAgo
        },
        stage: {
          notIn: ['Won', 'Lost']
        }
      },
      include: {
        contact: true
      }
    });

    const results = [];

    for (const deal of staleDeals) {
      // 2. Simulate AI generating a follow-up message
      const aiMessage = `Hi ${deal.contact.name}, I noticed we haven't connected regarding the ${deal.title} recently. Are you still interested in moving forward?`;

      // 3. Log the activity
      await prisma.activity.create({
        data: {
          type: 'AI_FOLLOWUP',
          content: `Automated follow-up sent: "${aiMessage}"`,
          dealId: deal.id,
          contactId: deal.contactId
        }
      });

      // 4. Update the deal's updatedAt timestamp to prevent immediate re-triggering
      await prisma.deal.update({
        where: { id: deal.id },
        data: { updatedAt: new Date() }
      });

      results.push({ dealId: deal.id, contact: deal.contact.name });
    }

    return NextResponse.json({ 
      success: true, 
      processed: staleDeals.length,
      details: results 
    });

  } catch (error) {
    console.error('Agent Scan Error:', error);
    return NextResponse.json({ error: 'Failed to run agent scan' }, { status: 500 });
  }
}
