import { Button } from "@/components/ui/button";
import { AccountSettingsSection } from "./AccountSettingsSection";
import { PasswordChangeSection } from "./PasswordChangeSection";
import { NotificationSettingsSection } from "./NotificationSettingsSection";
import { DangerZoneSection } from "./DangerZoneSection";

export function UserSettingsLayout() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Control your account preferences and notifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Account settings */}
        <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-2">
          <AccountSettingsSection />
          <PasswordChangeSection />
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="button">Save changes</Button>
          </div>
        </section>

        {/* Right: Preferences / Danger zone */}
        <div className="space-y-8">
          <NotificationSettingsSection />
          <DangerZoneSection />
        </div>
      </div>
    </div>
  );
}
