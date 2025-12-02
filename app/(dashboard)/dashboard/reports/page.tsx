"use client";

import { DataTable, Column } from "@/components/common/data-table";
import { Button } from "@/components/ui/button";

interface Report {
  id: string;
  title: string;
  type: string;
  period: string;
  status: "generated" | "scheduled" | "failed";
  createdAt: string;
}

const reportsData: Report[] = [
  {
    id: "RPT-001",
    title: "Monthly Activity Summary",
    type: "Activity",
    period: "Jan 2025",
    status: "generated",
    createdAt: "2025-02-01",
  },
  {
    id: "RPT-002",
    title: "Tasks Completion Report",
    type: "Tasks",
    period: "Last 7 days",
    status: "generated",
    createdAt: "2025-02-03",
  },
  {
    id: "RPT-003",
    title: "Time Spent per Project",
    type: "Productivity",
    period: "Q1 2025",
    status: "scheduled",
    createdAt: "2025-02-05",
  },
  {
    id: "RPT-004",
    title: "Login Activity Report",
    type: "Security",
    period: "Last 30 days",
    status: "generated",
    createdAt: "2025-02-06",
  },
  {
    id: "RPT-005",
    title: "Error Logs Summary",
    type: "System",
    period: "Yesterday",
    status: "failed",
    createdAt: "2025-02-07",
  },
];

export default function ReportsPage() {
  const columns: Column<Report>[] = [
    {
      key: "title",
      header: "Report",
      accessor: (report) => (
        <div className="space-y-1">
          <p className="font-medium">{report.title}</p>
          <p className="text-xs text-muted-foreground">{report.id}</p>
        </div>
      ),
      sortable: true,
    },
    {
      key: "type",
      header: "Type",
      accessor: (report) => (
        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
          {report.type}
        </span>
      ),
      sortable: true,
    },
    {
      key: "period",
      header: "Period",
      accessor: (report) => (
        <span className="text-sm text-muted-foreground">{report.period}</span>
      ),
      sortable: true,
    },
    {
      key: "status",
      header: "Status",
      accessor: (report) => {
        const statusConfig = {
          generated: {
            label: "Generated",
            className:
              "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
          },
          scheduled: {
            label: "Scheduled",
            className:
              "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
          },
          failed: {
            label: "Failed",
            className:
              "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
          },
        } as const;

        const cfg = statusConfig[report.status];

        return (
          <span className={`px-2 py-1 text-xs rounded-full ${cfg.className}`}>
            {cfg.label}
          </span>
        );
      },
      sortable: true,
    },
    {
      key: "createdAt",
      header: "Created",
      accessor: (report) => (
        <span className="text-sm text-muted-foreground">
          {new Date(report.createdAt).toLocaleDateString()}
        </span>
      ),
      sortable: true,
    },
    {
      key: "actions",
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            View
          </Button>
          <Button variant="ghost" size="sm">
            Download
          </Button>
        </div>
      ),
      className: "text-right",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your generated reports.
          </p>
        </div>
        <Button type="button">Generate new report</Button>
      </div>

      <DataTable
        data={reportsData}
        columns={columns}
        title="Recent reports"
        searchable
        searchPlaceholder="Search reports by title, type or period..."
        searchKeys={["title", "type", "period"]}
        pagination
        itemsPerPage={10}
        emptyMessage="No reports found"
      />
    </div>
  );
}
