import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ProfileSettingsSection() {
  return (
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
  );
}
