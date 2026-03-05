import { prisma } from "@/lib/prisma";
import { Users, DollarSign, TrendingUp, Zap } from "lucide-react";

async function getStats() {
  const contactCount = await prisma.contact.count();
  const dealCount = await prisma.deal.count();
  const totalValue = await prisma.deal.aggregate({
    _sum: { value: true }
  });
  
  return {
    contacts: contactCount,
    deals: dealCount,
    revenue: totalValue._sum.value || 0
  };
}

export default async function Dashboard() {
  const stats = await getStats();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Welcome back, Admin</h1>
        <p className="text-textSecondary">Here's what's happening with your dealership today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/20 rounded-xl text-primary">
              <Users size={24} />
            </div>
            <span className="text-xs font-medium text-success">+12%</span>
          </div>
          <h3 className="text-textSecondary text-sm font-medium">Total Leads</h3>
          <p className="text-3xl font-bold mt-1">{stats.contacts}</p>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
              <DollarSign size={24} />
            </div>
            <span className="text-xs font-medium text-success">+5%</span>
          </div>
          <h3 className="text-textSecondary text-sm font-medium">Pipeline Value</h3>
          <p className="text-3xl font-bold mt-1">${stats.revenue.toLocaleString()}</p>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-accent/20 rounded-xl text-accent">
              <TrendingUp size={24} />
            </div>
            <span className="text-xs font-medium text-textSecondary">Stable</span>
          </div>
          <h3 className="text-textSecondary text-sm font-medium">Active Deals</h3>
          <p className="text-3xl font-bold mt-1">{stats.deals}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">AI Agent Activity</h2>
            <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
              Run Scan
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="mt-1 p-2 bg-primary/20 rounded-lg text-primary">
                <Zap size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Follow-up sent to John Doe</p>
                <p className="text-xs text-textSecondary mt-1">Deal: 2024 BMW M3 - Inactive for 4 days</p>
                <p className="text-[10px] text-textSecondary/50 mt-2">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
          <div className="text-center py-10 text-textSecondary">
            <p className="text-sm">No recent activities to display.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
