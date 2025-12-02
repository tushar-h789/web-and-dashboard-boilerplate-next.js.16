import { Separator } from "@/components/ui/separator";

export function AdminAccessSection() {
  return (
    <div className="space-y-4">
      <Separator />
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
  );
}
