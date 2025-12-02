"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileSidebarComponent } from "./DashboardSidebar";

interface DashboardHeaderProps {
  isAdmin?: boolean;
  title?: string;
}

export default function DashboardHeader({
  isAdmin = false,
  title = "Dashboard",
}: DashboardHeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const basePath = isAdmin ? "/admin-dashboard" : "/dashboard";

  const menuItems = [
    { label: "Profile", href: `${basePath}/profile` },
    { label: "Settings", href: `${basePath}/settings` },
    ...(isAdmin
      ? [
          { label: "Users", href: "/admin-dashboard/users" },
          { label: "Products", href: "/admin-dashboard/products" },
          { label: "Analytics", href: "/admin-dashboard/analytics" },
        ]
      : [{ label: "Reports", href: "/dashboard/reports" }]),
  ];

  return (
    <header className="sticky top-0 z-40 h-16 border-b bg-background shrink-0">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Left: Mobile Menu + Title */}
        <div className="flex items-center gap-4">
          <MobileSidebarComponent isAdmin={isAdmin} />
          <h1 className="text-lg font-semibold lg:text-xl">{title}</h1>
        </div>

        {/* Right: Search, Notifications, User Menu */}
        <div className="flex items-center gap-2">
          {/* Search Button (Mobile) */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Search Input (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg border bg-background">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent text-sm w-64"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>

          {/* User Menu */}
          <div className="flex items-center gap-2 pl-2 border-l">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">
                  {isAdmin ? "Admin" : "User"}
                </p>
              </div>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => setIsUserMenuOpen((open) => !open)}
                  aria-haspopup="menu"
                  aria-expanded={isUserMenuOpen}
                >
                  <Settings className="h-5 w-5" />
                </Button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md border bg-popover shadow-lg z-50 py-1 text-sm">
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 hover:bg-muted"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t my-1" />
                    <button
                      className="block w-full text-left px-3 py-2 text-destructive hover:bg-muted"
                      type="button"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
