import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function StoreSettingsSection() {
  return (
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
  );
}
