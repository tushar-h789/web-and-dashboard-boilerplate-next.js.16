"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, User, Settings, X, LogIn, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// Navigation links data
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about-us", label: "About", icon: User },
  { href: "/contact-us", label: "Contact", icon: User },
  { href: "/dashboard", label: "User Dashboard", icon: User },
  { href: "/admin-dashboard", label: "Admin Dashboard", icon: Settings },
];

// Desktop Navigation - shows on large screens
function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors rounded-full",
              isActive
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-primary hover:bg-primary/10"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

// Mobile Navigation - shows on small screens
function MobileNav({
  isSheetOpen,
  setIsSheetOpen,
  pathname,
}: {
  isSheetOpen: boolean;
  setIsSheetOpen: (open: boolean) => void;
  pathname: string;
}) {
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px]">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <Link href="/" onClick={() => setIsSheetOpen(false)}>
            <span className="font-bold text-xl">NJ Boilerplate</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSheetOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Separator />

        {/* Navigation Links */}
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsSheetOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg p-3 text-base font-medium transition-colors hover:bg-accent",
                    isActive ? "bg-accent text-primary" : "text-foreground"
                  )}
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </ScrollArea>

        {/* Auth Buttons */}
        <div className="flex gap-3 pt-2">
          <Button variant="outline" className="flex-1" asChild>
            <Link href="/login" onClick={() => setIsSheetOpen(false)}>
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Link>
          </Button>
          <Button className="flex-1" asChild>
            <Link href="/signup" onClick={() => setIsSheetOpen(false)}>
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Main Header Component
export function MainHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shrink-0 py-2 bg-gray-100">
      <div className="container flex h-16 items-center justify-between">
        {/* Left: Mobile Menu + Logo */}
        <div className="flex items-center gap-4">
          <MobileNav
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
            pathname={pathname}
          />
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl text-primary">
              NJ
            </span>
            <span className="inline-block font-semibold">Boilerplate</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <DesktopNav pathname={pathname} />

        {/* Right: Auth Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button variant="outline" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile: User Icon */}
        <Button variant="ghost" size="icon" className="lg:hidden">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
