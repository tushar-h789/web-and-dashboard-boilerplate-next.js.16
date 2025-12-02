import { AdminProductsTable } from "@/components/dashboard/AdminDashboard/products/ProductsTable";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Products Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage all products in your inventory
        </p>
      </div>

      <AdminProductsTable />
    </div>
  );
}
