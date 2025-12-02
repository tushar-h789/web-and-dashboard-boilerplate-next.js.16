import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function PasswordChangeSection() {
  return (
    <div className="space-y-4">
      <Separator />
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
  );
}
