import { DangerZoneSection } from "./DangerZoneSection";
import { NotificationSettingsSection } from "./NotificationSettingsSection";
import { StoreSettingsSection } from "./StoreSettingsSection";
import { ProfileSettingsSection } from "./ProfileSettingsSection";

export function AdminSettingsLayout() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage admin account, store details, and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left: Forms */}
        <div className="space-y-8 xl:col-span-2">
          {/* Profile Settings */}

          <ProfileSettingsSection />
          {/* Store Settings */}
          <StoreSettingsSection />
        </div>

        {/* Right: Preferences / Notifications */}
        <div className="space-y-8">
          <NotificationSettingsSection />

          <DangerZoneSection />
        </div>
      </div>
    </div>
  );
}
