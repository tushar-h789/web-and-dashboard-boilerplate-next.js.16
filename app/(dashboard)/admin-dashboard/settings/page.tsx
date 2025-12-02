import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingsPage() {
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
          <section className="rounded-lg border bg-card p-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Profile</h2>
              <p className="text-sm text-muted-foreground">
                Basic information about the admin account.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="admin@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Role</label>
                <Input disabled value="Administrator" />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="button">Save changes</Button>
            </div>
          </section>

          {/* Store Settings */}
          <section className="rounded-lg border bg-card p-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Store details</h2>
              <p className="text-sm text-muted-foreground">
                Information visible to customers on invoices and emails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Store name</label>
                <Input placeholder="NJ Boilerplate Store" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Support email</label>
                <Input type="email" placeholder="support@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Address</label>
                <Input placeholder="123 Tech Street, Silicon Valley" />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="button">Save store settings</Button>
            </div>
          </section>
        </div>

        {/* Right: Preferences / Notifications */}
        <div className="space-y-8">
          <section className="rounded-lg border bg-card p-6 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Notifications</h2>
              <p className="text-sm text-muted-foreground">
                Choose what updates you want to receive.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">New orders</p>
                  <p className="text-xs text-muted-foreground">
                    Get notified when a new order is placed.
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
                  <p className="text-sm font-medium">Low stock alerts</p>
                  <p className="text-xs text-muted-foreground">
                    Receive alerts when product stock is low.
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
                  <p className="text-sm font-medium">Weekly summary</p>
                  <p className="text-xs text-muted-foreground">
                    A summary of sales and performance each week.
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
                Sensitive actions. Be careful what you do here.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full border-destructive text-destructive"
            >
              Disable admin account
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
