import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
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
        <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-1">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary">
              JD
            </div>
            <div>
              <p className="text-lg font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">
                john.doe@example.com
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Role</span>
              <span className="font-medium">User</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Member since</span>
              <span className="font-medium">Jan 2024</span>
            </div>
          </div>
        </section>

        {/* Right: Editable fields */}
        <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-2">
          <div>
            <h2 className="text-lg font-semibold">Personal information</h2>
            <p className="text-sm text-muted-foreground">
              Update your name, contact details and basic information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First name</label>
              <Input placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last name</label>
              <Input placeholder="Doe" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="john.doe@example.com" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Phone</label>
              <Input placeholder="+1 (555) 123-4567" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Change password</h3>
              <p className="text-xs text-muted-foreground">
                Make sure your new password is at least 8 characters long.
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
      </div>
    </div>
  );
}
