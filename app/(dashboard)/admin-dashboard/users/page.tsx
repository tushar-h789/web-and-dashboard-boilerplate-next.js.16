import { AdminUsersTable } from "@/components/dashboard/AdminDashboard/users/UsersTable";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage all users in your system
        </p>
      </div>

      <AdminUsersTable />
    </div>
  );
}
