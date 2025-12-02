"use client";

import { DataTable, Column } from "@/components/common/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye, Package } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "in_stock" | "out_of_stock" | "low_stock";
  createdAt: string;
}

const productsData: Product[] = [
  {
    id: "1",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 150,
    status: "in_stock",
    createdAt: "2024-01-10",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    stock: 45,
    status: "in_stock",
    createdAt: "2024-02-15",
  },
  {
    id: "3",
    name: "USB-C Cable",
    category: "Accessories",
    price: 12.99,
    stock: 5,
    status: "low_stock",
    createdAt: "2024-03-05",
  },
  {
    id: "4",
    name: "Laptop Stand",
    category: "Accessories",
    price: 39.99,
    stock: 0,
    status: "out_of_stock",
    createdAt: "2024-01-20",
  },
  {
    id: "5",
    name: "Monitor 27 inch",
    category: "Electronics",
    price: 299.99,
    stock: 25,
    status: "in_stock",
    createdAt: "2024-02-28",
  },
  {
    id: "6",
    name: "Webcam HD",
    category: "Electronics",
    price: 49.99,
    stock: 8,
    status: "low_stock",
    createdAt: "2024-03-12",
  },
  {
    id: "7",
    name: "Desk Mat",
    category: "Accessories",
    price: 19.99,
    stock: 120,
    status: "in_stock",
    createdAt: "2024-01-08",
  },
  {
    id: "8",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    stock: 0,
    status: "out_of_stock",
    createdAt: "2024-02-22",
  },
];

export default function ProductsPage() {
  const columns: Column<Product>[] = [
    {
      key: "name",
      header: "Product Name",
      accessor: (product) => (
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{product.name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      key: "category",
      header: "Category",
      accessor: (product) => (
        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {product.category}
        </span>
      ),
      sortable: true,
    },
    {
      key: "price",
      header: "Price",
      accessor: (product) => (
        <div className="font-semibold">${product.price.toFixed(2)}</div>
      ),
      sortable: true,
    },
    {
      key: "stock",
      header: "Stock",
      accessor: (product) => (
        <div className="font-medium">{product.stock} units</div>
      ),
      sortable: true,
    },
    {
      key: "status",
      header: "Status",
      accessor: (product) => {
        const statusConfig = {
          in_stock: {
            label: "In Stock",
            className:
              "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
          },
          low_stock: {
            label: "Low Stock",
            className:
              "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
          },
          out_of_stock: {
            label: "Out of Stock",
            className:
              "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
          },
        };
        const config = statusConfig[product.status];
        return (
          <span
            className={`px-2 py-1 text-xs rounded-full ${config.className}`}
          >
            {config.label}
          </span>
        );
      },
      sortable: true,
    },
    {
      key: "createdAt",
      header: "Created",
      accessor: (product) => (
        <div className="text-muted-foreground">
          {new Date(product.createdAt).toLocaleDateString()}
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
        <h1 className="text-3xl font-bold">Products Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage all products in your inventory
        </p>
      </div>

      <DataTable
        data={productsData}
        columns={columns}
        title="All Products"
        searchable={true}
        searchPlaceholder="Search products by name, category..."
        searchKeys={["name", "category"]}
        pagination={true}
        itemsPerPage={10}
        emptyMessage="No products found"
      />
    </div>
  );
}
