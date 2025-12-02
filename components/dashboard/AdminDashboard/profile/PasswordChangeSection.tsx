import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function PasswordChangeSection() {
  return (
    <div className="space-y-4">
      <Separator />
      <div>
        <h3 className="text-sm font-semibold">Change password</h3>
        <p className="text-xs text-muted-foreground">
          Strong passwords keep the account secure. Use at least 8 characters.
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
  );
}
