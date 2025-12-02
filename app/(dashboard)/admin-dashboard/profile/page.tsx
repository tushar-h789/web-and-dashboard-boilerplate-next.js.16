import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AdminProfilePage() {
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
        <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-1">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary">
              AD
            </div>
            <div>
              <p className="text-lg font-semibold">Admin Doe</p>
              <p className="text-sm text-muted-foreground">admin@example.com</p>
            </div>
          </div>

          <Separator />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Role</span>
              <span className="font-medium">Administrator</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Member since</span>
              <span className="font-medium">Jan 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last login</span>
              <span className="font-medium">2 hours ago</span>
            </div>
          </div>
        </section>

        {/* Right: Editable details & permissions */}
        <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-2">
          <div>
            <h2 className="text-lg font-semibold">Admin information</h2>
            <p className="text-sm text-muted-foreground">
              Update name, contact details, and security information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First name</label>
              <Input placeholder="Admin" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last name</label>
              <Input placeholder="Doe" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="admin@example.com" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Contact number</label>
              <Input placeholder="+1 (555) 987-6543" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Change password</h3>
              <p className="text-xs text-muted-foreground">
                Strong passwords keep the account secure. Use at least 8
                characters.
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

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Admin access</h3>
              <p className="text-xs text-muted-foreground">
                Overview of the areas this admin can manage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-md border p-3">
                <p className="font-medium">User Management</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Can view and edit all users.
                </p>
              </div>
              <div className="rounded-md border p-3">
                <p className="font-medium">Products & Inventory</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Can manage products and stock levels.
                </p>
              </div>
              <div className="rounded-md border p-3">
                <p className="font-medium">Analytics</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Full access to analytics and reports.
                </p>
              </div>
              <div className="rounded-md border p-3">
                <p className="font-medium">Settings</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Can update global application settings.
                </p>
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
      </div>
    </div>
  );
}
