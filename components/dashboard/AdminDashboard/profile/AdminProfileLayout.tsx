import { Button } from "@/components/ui/button";
import { ProfileSummaryCard } from "./ProfileSummaryCard";
import { AdminInformationSection } from "./AdminInformationSection";
import { PasswordChangeSection } from "./PasswordChangeSection";
import { AdminAccessSection } from "./AdminAccessSection";

export function AdminProfileLayout() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Profile</h1>
        <p className="text-muted-foreground mt-2">
          View and update administrator information and access details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Avatar & basic info */}
        <ProfileSummaryCard />

        {/* Right: Editable details & permissions */}
        <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-2">
          <AdminInformationSection />
          <PasswordChangeSection />
          <AdminAccessSection />

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="button">Save changes</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
