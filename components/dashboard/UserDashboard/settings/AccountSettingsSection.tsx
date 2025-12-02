import { Input } from "@/components/ui/input";

export function AccountSettingsSection() {
  return (
    <div className="space-y-6">
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
    </div>
  );
}
