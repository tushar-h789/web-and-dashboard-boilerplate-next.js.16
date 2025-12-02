import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
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
          <div>
            <h2 className="text-lg font-semibold">Account</h2>
            <p className="text-sm text-muted-foreground">
              Update your basic account information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Display name</label>
              <Input placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <Input placeholder="johndoe" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="john.doe@example.com" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Password</h3>
              <p className="text-xs text-muted-foreground">
                Change your password to keep your account secure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="button">Save changes</Button>
          </div>
        </section>

        {/* Right: Preferences / Danger zone */}
        <div className="space-y-8">
          <section className="rounded-lg border bg-card p-6 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Notifications</h2>
              <p className="text-sm text-muted-foreground">
                Choose which emails you want to receive.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Product updates</p>
                  <p className="text-xs text-muted-foreground">
                    Get notified about new features and improvements.
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </div>

              <Separator />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Security alerts</p>
                  <p className="text-xs text-muted-foreground">
                    Important notifications about your account security.
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </div>

              <Separator />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">News & tips</p>
                  <p className="text-xs text-muted-foreground">
                    Occasionally receive news and productivity tips.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </div>
            </div>
          </section>

          <section className="rounded-lg border bg-card p-6 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Danger zone</h2>
              <p className="text-sm text-muted-foreground">
                Delete your account and all associated data.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full border-destructive text-destructive"
              type="button"
            >
              Delete my account
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
