import { Separator } from "@/components/ui/separator";

export function NotificationSettingsSection() {
  return (
    <section className="rounded-lg border bg-card p-6 space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="text-sm text-muted-foreground">
          Choose what updates you want to receive.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium">New orders</p>
            <p className="text-xs text-muted-foreground">
              Get notified when a new order is placed.
            </p>
          </div>
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 h-4 w-4 accent-primary"
          />
        </div>

        <Separator />

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Low stock alerts</p>
            <p className="text-xs text-muted-foreground">
              Receive alerts when product stock is low.
            </p>
          </div>
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 h-4 w-4 accent-primary"
          />
        </div>

        <Separator />

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Weekly summary</p>
            <p className="text-xs text-muted-foreground">
              A summary of sales and performance each week.
            </p>
          </div>
          <input type="checkbox" className="mt-1 h-4 w-4 accent-primary" />
        </div>
      </div>
    </section>
  );
}
