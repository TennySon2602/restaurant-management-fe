import { useState } from "react";
import { Plus, Minus, Trash2, RotateCcw, Send } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

const menuCategories = ["Appetizers", "Mains", "Desserts", "Drinks"];

const menuItems = {
  Appetizers: [
    { id: "a1", name: "Caesar Salad", price: 14 },
    { id: "a2", name: "Lobster Bisque", price: 18 },
    { id: "a3", name: "Bruschetta", price: 12 },
  ],
  Mains: [
    { id: "m1", name: "Truffle Pasta", price: 28 },
    { id: "m2", name: "Grilled Salmon", price: 35 },
    { id: "m3", name: "Wagyu Steak", price: 65 },
  ],
  Desserts: [
    { id: "d1", name: "Chocolate Lava", price: 12 },
    { id: "d2", name: "Tiramisu", price: 10 },
    { id: "d3", name: "Cheesecake", price: 11 },
  ],
  Drinks: [
    { id: "dr1", name: "Red Wine", price: 15 },
    { id: "dr2", name: "Sparkling Water", price: 5 },
    { id: "dr3", name: "Espresso", price: 4 },
  ],
};

export default function StaffOrders() {
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const [currentOrder, setCurrentOrder] = useState<OrderItem[]>([]);

  const addItem = (item: { id: string; name: string; price: number }) => {
    const existingItem = currentOrder.find((i) => i.id === item.id);
    if (existingItem) {
      setCurrentOrder(
        currentOrder.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCurrentOrder([...currentOrder, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setCurrentOrder(
      currentOrder
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCurrentOrder(currentOrder.filter((item) => item.id !== id));
  };

  const clearOrder = () => {
    setCurrentOrder([]);
  };

  const calculateTotal = () => {
    return currentOrder.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const sendOrder = () => {
    if (currentOrder.length > 0) {
      alert("Order sent to kitchen!");
      setCurrentOrder([]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-160px)] flex gap-4 p-4">
      {/* Left Panel - Categories */}
      <div className="w-48 bg-card rounded-xl p-4 shadow-md">
        <h3 className="text-[#2D2D2D] mb-4">Categories</h3>
        <div className="space-y-2">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-[#FF6B35] text-white"
                  : "bg-background hover:bg-accent text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Center Panel - Menu Items */}
      <div className="flex-1 bg-card rounded-xl p-6 shadow-md overflow-y-auto">
        <h3 className="text-[#2D2D2D] mb-4">{selectedCategory}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {menuItems[selectedCategory as keyof typeof menuItems].map((item) => (
            <button
              key={item.id}
              onClick={() => addItem(item)}
              className="bg-background hover:bg-accent p-6 rounded-xl transition-all hover:shadow-md min-h-[120px] flex flex-col items-center justify-center gap-2"
            >
              <div className="text-center">
                <p className="mb-2">{item.name}</p>
                <p className="text-[#FF6B35]">${item.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Current Order */}
      <div className="w-96 bg-card rounded-xl shadow-md flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-[#2D2D2D]">Current Order</h3>
            <button
              onClick={clearOrder}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              title="Clear Order"
            >
              <RotateCcw className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Table 5</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {currentOrder.length === 0 ? (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <p className="text-sm text-center">
                Select items from the menu
                <br />
                to start an order
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {currentOrder.map((item) => (
                <div
                  key={item.id}
                  className="bg-background rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.price} each
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-accent rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-card hover:bg-accent rounded flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-card hover:bg-accent rounded flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[#FF6B35]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-border space-y-4">
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span className="text-[#FF6B35]">${calculateTotal().toFixed(2)}</span>
          </div>

          <button
            onClick={sendOrder}
            disabled={currentOrder.length === 0}
            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-colors ${
              currentOrder.length > 0
                ? "bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <Send className="w-5 h-5" />
            Send to Kitchen
          </button>
        </div>
      </div>
    </div>
  );
}
