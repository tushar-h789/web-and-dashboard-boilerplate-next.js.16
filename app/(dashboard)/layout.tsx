"use client";

import { usePathname } from "next/navigation";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { DesktopSidebarComponent } from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Detect if admin dashboard based on pathname
  const isAdmin = pathname.startsWith("/admin-dashboard");
  const title = isAdmin ? "Admin Dashboard" : "User Dashboard";

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader isAdmin={isAdmin} title={title} />
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <DesktopSidebarComponent isAdmin={isAdmin} />
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
