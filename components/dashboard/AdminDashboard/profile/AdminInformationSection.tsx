import { Input } from "@/components/ui/input";

export function AdminInformationSection() {
  return (
    <div className="space-y-6">
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
    </div>
  );
}
