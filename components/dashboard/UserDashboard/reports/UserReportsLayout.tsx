import { ReportsHeader } from "./ReportsHeader";
import { ReportsTable } from "./ReportsTable";

export function UserReportsLayout() {
  return (
    <div className="space-y-6">
      <ReportsHeader />
      <ReportsTable />
    </div>
  );
}
