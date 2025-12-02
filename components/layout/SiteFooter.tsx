"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Heart,
  Copyright,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// ============================================
// Configuration Data
// ============================================
const COMPANY_INFO = {
  name: "NJ Boilerplate",
  logo: "/logo.png", // আপনার লোগো পাথ
  description: "Building better digital experiences",
  email: "hello@njboilerplate.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, Silicon Valley",
};

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

// ============================================
// Brand Logo Component
// ============================================
const BrandLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo */}
      <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">NJ</span>
      </div>

      {/* Brand Name */}
      <div>
        <Link href="/" className="text-xl font-bold">
          {COMPANY_INFO.name}
        </Link>
        <p className="text-sm text-muted-foreground mt-1">
          {COMPANY_INFO.description}
        </p>
      </div>
    </div>
  );
};

// ============================================
// Contact Info Component
// ============================================
const ContactInfo = () => {
  return (
    <div className="space-y-3 mt-4">
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-muted-foreground" />
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className="text-sm hover:text-primary"
        >
          {COMPANY_INFO.email}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-muted-foreground" />
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="text-sm hover:text-primary"
        >
          {COMPANY_INFO.phone}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {COMPANY_INFO.address}
        </span>
      </div>
    </div>
  );
};

// ============================================
// Social Links Component
// ============================================
const SocialLinks = () => {
  return (
    <div className="flex gap-3 mt-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
};

// ============================================
// Newsletter Component
// ============================================
const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Stay Updated</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email"
          className="flex-1"
          required
        />
        <Button type="submit" size="sm">
          Join
        </Button>
      </form>
      <p className="text-xs text-muted-foreground">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

// ============================================
// Main Footer Component
// ============================================
export function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t flex-shrink-0 mt-auto py-10 bg-gray-100">
      {/* Top Section - Logo, Contact, Newsletter */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - Logo and Contact Info */}
          <div className="lg:col-span-5">
            <BrandLogo />
            <ContactInfo />
            <SocialLinks />
          </div>

          {/* Right - Links and Newsletter */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {FOOTER_LINKS.map((column) => (
                <div key={column.title} className="space-y-3">
                  <h3 className="font-semibold">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Newsletter in last column */}
              <div className="md:col-span-3 lg:col-span-1">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Bottom - Copyright */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Copyright className="h-4 w-4" />
            <span>
              {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-primary"
            >
              Cookies
            </Link>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span>by NJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
