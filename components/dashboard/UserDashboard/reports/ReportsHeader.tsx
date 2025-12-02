import { Button } from "@/components/ui/button";

export function ReportsHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-muted-foreground mt-2">
          View and manage your generated reports.
        </p>
      </div>
      <Button type="button">Generate new report</Button>
    </div>
  );
}

