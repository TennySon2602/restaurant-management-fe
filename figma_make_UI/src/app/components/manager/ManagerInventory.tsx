import { useState } from "react";
import { Plus, Minus, AlertTriangle } from "lucide-react";

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  stock: number;
  unit: string;
  minStock: number;
}

export default function ManagerInventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: 1, name: "Salmon", category: "Seafood", stock: 3, unit: "kg", minStock: 5 },
    { id: 2, name: "Wagyu Beef", category: "Meat", stock: 8, unit: "kg", minStock: 3 },
    { id: 3, name: "Truffle Oil", category: "Oils", stock: 0.5, unit: "L", minStock: 1 },
    { id: 4, name: "Parmesan", category: "Dairy", stock: 2, unit: "kg", minStock: 4 },
    { id: 5, name: "Pasta", category: "Dry Goods", stock: 15, unit: "kg", minStock: 10 },
    { id: 6, name: "Lobster", category: "Seafood", stock: 6, unit: "kg", minStock: 3 },
    { id: 7, name: "Chocolate", category: "Dessert Ingredients", stock: 12, unit: "kg", minStock: 5 },
    { id: 8, name: "Cream", category: "Dairy", stock: 8, unit: "L", minStock: 5 },
  ]);

  const updateStock = (id: number, change: number) => {
    setInventory(
      inventory.map((item) =>
        item.id === id
          ? { ...item, stock: Math.max(0, item.stock + change) }
          : item
      )
    );
  };

  const getStockStatus = (item: InventoryItem) => {
    if (item.stock === 0) return { label: "Out of Stock", color: "text-[#F44336]", bg: "bg-[#F44336]/10" };
    if (item.stock < item.minStock) return { label: "Low Stock", color: "text-[#FFC107]", bg: "bg-[#FFC107]/10" };
    return { label: "Good", color: "text-[#4CAF50]", bg: "bg-[#4CAF50]/10" };
  };

  const lowStockItems = inventory.filter((item) => item.stock < item.minStock);
  const outOfStockItems = inventory.filter((item) => item.stock === 0);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-[#2D2D2D]">Inventory Management</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Track ingredient stock levels
        </p>
      </div>

      {/* Alerts */}
      {lowStockItems.length > 0 && (
        <div className="bg-[#FFC107]/10 border border-[#FFC107] rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[#2D2D2D] mb-2">Low Stock Alert</h4>
              <p className="text-sm text-muted-foreground mb-3">
                {lowStockItems.length} item{lowStockItems.length !== 1 ? "s" : ""} need
                restocking
              </p>
              <div className="flex flex-wrap gap-2">
                {lowStockItems.map((item) => (
                  <span
                    key={item.id}
                    className="px-3 py-1 bg-white rounded-full text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-sm text-muted-foreground">Total Items</p>
          <p className="text-2xl text-[#2D2D2D] mt-1">{inventory.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-sm text-muted-foreground">Low Stock</p>
          <p className="text-2xl text-[#FFC107] mt-1">{lowStockItems.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-sm text-muted-foreground">Out of Stock</p>
          <p className="text-2xl text-[#F44336] mt-1">{outOfStockItems.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-sm text-muted-foreground">Good Stock</p>
          <p className="text-2xl text-[#4CAF50] mt-1">
            {inventory.filter((i) => i.stock >= i.minStock).length}
          </p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-card rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="text-left p-4 text-sm text-muted-foreground">
                  Ingredient
                </th>
                <th className="text-left p-4 text-sm text-muted-foreground">
                  Category
                </th>
                <th className="text-left p-4 text-sm text-muted-foreground">
                  Current Stock
                </th>
                <th className="text-left p-4 text-sm text-muted-foreground">
                  Min Stock
                </th>
                <th className="text-left p-4 text-sm text-muted-foreground">
                  Status
                </th>
                <th className="text-right p-4 text-sm text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => {
                const status = getStockStatus(item);
                return (
                  <tr key={item.id} className="border-b border-border last:border-0">
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-accent rounded-full text-sm">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4">
                      {item.stock} {item.unit}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {item.minStock} {item.unit}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${status.bg} ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => updateStock(item.id, -1)}
                          className="p-2 hover:bg-accent rounded-lg transition-colors"
                        >
                          <Minus className="w-5 h-5 text-muted-foreground" />
                        </button>
                        <button
                          onClick={() => updateStock(item.id, 1)}
                          className="p-2 hover:bg-accent rounded-lg transition-colors"
                        >
                          <Plus className="w-5 h-5 text-[#4CAF50]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <button className="p-6 bg-card hover:bg-accent rounded-xl shadow-md transition-colors text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p>Add New Ingredient</p>
              <p className="text-sm text-muted-foreground">
                Add items to inventory
              </p>
            </div>
          </div>
        </button>

        <button className="p-6 bg-card hover:bg-accent rounded-xl shadow-md transition-colors text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p>Restock Low Items</p>
              <p className="text-sm text-muted-foreground">
                Create purchase order
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
