import { Button } from "@/components/ui/button";

export function DangerZoneSection() {
  return (
    <section className="rounded-lg border bg-card p-6 space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Danger zone</h2>
        <p className="text-sm text-muted-foreground">
          Sensitive actions. Be careful what you do here.
        </p>
      </div>

      <Button
        variant="outline"
        className="w-full border-destructive text-destructive"
      >
        Disable admin account
      </Button>
    </section>
  );
}
