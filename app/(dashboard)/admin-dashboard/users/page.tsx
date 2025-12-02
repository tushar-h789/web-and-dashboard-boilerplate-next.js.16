"use client";

import { DataTable, Column } from "@/components/common/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joinDate: string;
}

const usersData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "active",
    joinDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "active",
    joinDate: "2024-02-20",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "User",
    status: "inactive",
    joinDate: "2024-03-10",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "Moderator",
    status: "active",
    joinDate: "2024-01-05",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "User",
    status: "active",
    joinDate: "2024-04-12",
  },
];

export default function UsersPage() {
  const columns: Column<User>[] = [
    {
      key: "name",
      header: "Name",
      accessor: (user) => <div className="font-medium">{user.name}</div>,
      sortable: true,
    },
    {
      key: "email",
      header: "Email",
      accessor: (user) => (
        <div className="text-muted-foreground">{user.email}</div>
      ),
      sortable: true,
    },
    {
      key: "role",
      header: "Role",
      accessor: (user) => (
        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
          {user.role}
        </span>
      ),
      sortable: true,
    },
    {
      key: "status",
      header: "Status",
      accessor: (user) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            user.status === "active"
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {user.status}
        </span>
      ),
      sortable: true,
    },
    {
      key: "joinDate",
      header: "Join Date",
      accessor: (user) => (
        <div className="text-muted-foreground">
          {new Date(user.joinDate).toLocaleDateString()}
        </div>
      ),
      sortable: true,
    },
    {
      key: "actions",
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ),
      className: "text-right",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage all users in your system
        </p>
      </div>

      <DataTable
        data={usersData}
        columns={columns}
        title="All Users"
        searchable={true}
        searchPlaceholder="Search users by name, email..."
        searchKeys={["name", "email", "role"]}
        pagination={true}
        itemsPerPage={10}
        emptyMessage="No users found"
      />
    </div>
  );
}
