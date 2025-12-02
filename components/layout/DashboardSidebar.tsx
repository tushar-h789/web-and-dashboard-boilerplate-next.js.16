"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Settings,
  FileText,
  BarChart3,
  Users,
  Package,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// User Dashboard Links
const userDashboardLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
];

// Admin Dashboard Links
const adminDashboardLinks = [
  { href: "/admin-dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/admin-dashboard/users", label: "Users", icon: Users },
  { href: "/admin-dashboard/products", label: "Products", icon: Package },
  { href: "/admin-dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin-dashboard/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  isAdmin?: boolean;
}

// Desktop Sidebar
function DesktopSidebar({ isAdmin = false }: SidebarProps) {
  const pathname = usePathname();
  const links = isAdmin ? adminDashboardLinks : userDashboardLinks;

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r bg-background shrink-0">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">NJ</span>
          <span className="font-semibold">Dashboard</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer Actions */}
      <div className="p-4 border-t space-y-1">
        <Link
          href="/"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
    </aside>
  );
}

// Mobile Sidebar
function MobileSidebar({ isAdmin = false }: SidebarProps) {
  const pathname = usePathname();
  const links = isAdmin ? adminDashboardLinks : userDashboardLinks;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="h-16 flex items-center justify-between px-6 border-b">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="font-bold text-xl text-primary">NJ</span>
            <span className="font-semibold">Dashboard</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <nav className="p-4 space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
        <div className="p-4 border-t">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Export desktop sidebar separately
export function DesktopSidebarComponent({ isAdmin = false }: SidebarProps) {
  return <DesktopSidebar isAdmin={isAdmin} />;
}

// Export mobile sidebar separately
export function MobileSidebarComponent({ isAdmin = false }: SidebarProps) {
  return <MobileSidebar isAdmin={isAdmin} />;
}

// Default export for convenience
export default function DashboardSidebar({ isAdmin = false }: SidebarProps) {
  return (
    <>
      <DesktopSidebar isAdmin={isAdmin} />
      <MobileSidebar isAdmin={isAdmin} />
    </>
  );
}
