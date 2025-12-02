import { MainHeader } from "@/components/layout/MainHeader";
import { MainFooter } from "@/components/layout/SiteFooter";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-1 pt-20 pb-10">{children}</main>
      <MainFooter />
    </div>
  );
}
