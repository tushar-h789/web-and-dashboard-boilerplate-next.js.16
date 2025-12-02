import { Separator } from "@/components/ui/separator";

export function ProfileSummaryCard() {
  return (
    <section className="rounded-lg border bg-card p-6 space-y-6 lg:col-span-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary">
          JD
        </div>
        <div>
          <p className="text-lg font-semibold">John Doe</p>
          <p className="text-sm text-muted-foreground">john.doe@example.com</p>
        </div>
      </div>

      <Separator />

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Role</span>
          <span className="font-medium">User</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Member since</span>
          <span className="font-medium">Jan 2024</span>
        </div>
      </div>
    </section>
  );
}
