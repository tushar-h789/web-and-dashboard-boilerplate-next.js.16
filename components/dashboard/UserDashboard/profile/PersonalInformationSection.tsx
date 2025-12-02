import { Input } from "@/components/ui/input";

export function PersonalInformationSection() {
  return (
    <div className="space-y-6">
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
    </div>
  );
}
