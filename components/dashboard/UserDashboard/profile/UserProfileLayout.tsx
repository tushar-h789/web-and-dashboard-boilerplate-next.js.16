import { Button } from "@/components/ui/button";
import { ProfileSummaryCard } from "./ProfileSummaryCard";
import { PersonalInformationSection } from "./PersonalInformationSection";
import { PasswordChangeSection } from "./PasswordChangeSection";

export function UserProfileLayout() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground mt-2">
          View and update your personal information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Avatar & Basic info */}
        <ProfileSummaryCard />

        {/* Right: Editable fields */}
        <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-2">
          <PersonalInformationSection />
          <PasswordChangeSection />

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
