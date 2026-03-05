import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DriveFlow CRM | AI-Powered Dealership Management",
  description: "Next-gen CRM for modern car dealerships",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <div className="flex min-h-screen">
          {/* Sidebar Placeholder */}
          <aside className="w-64 border-r border-border bg-surface/50 backdrop-blur-xl p-6 hidden md:block">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold">D</div>
              <span className="text-xl font-bold tracking-tight">DriveFlow</span>
            </div>
            <nav className="space-y-2">
              <a href="/" className="block p-3 rounded-xl bg-primary/10 text-primary font-medium">Dashboard</a>
              <a href="/contacts" className="block p-3 rounded-xl hover:bg-white/5 text-textSecondary transition-colors">Contacts</a>
              <a href="/deals" className="block p-3 rounded-xl hover:bg-white/5 text-textSecondary transition-colors">Deals</a>
            </nav>
          </aside>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
