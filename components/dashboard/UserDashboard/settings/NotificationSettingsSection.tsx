import { Separator } from "@/components/ui/separator";

export function NotificationSettingsSection() {
  return (
    <section className="rounded-lg border bg-card p-6 space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="text-sm text-muted-foreground">
          Choose which emails you want to receive.
        </p>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium">Product updates</p>
            <p className="text-xs text-muted-foreground">
              Get notified about new features and improvements.
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
            <p className="font-medium">Security alerts</p>
            <p className="text-xs text-muted-foreground">
              Important notifications about your account security.
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
            <p className="font-medium">News & tips</p>
            <p className="text-xs text-muted-foreground">
              Occasionally receive news and productivity tips.
            </p>
          </div>
          <input type="checkbox" className="mt-1 h-4 w-4 accent-primary" />
        </div>
      </div>
    </section>
  );
}
