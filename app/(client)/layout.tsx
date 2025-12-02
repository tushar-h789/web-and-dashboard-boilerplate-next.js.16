import { MainHeader } from "@/components/layout/MainHeader";
import SiteFooter from "@/components/layout/SiteFooter";

/**
 * Client Layout Component
 *
 * This layout wraps all client-side pages with:
 * - Header navigation
 * - Main content area
 * - Footer
 */
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
