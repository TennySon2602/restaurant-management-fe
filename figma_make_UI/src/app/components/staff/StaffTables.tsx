import { useState } from "react";
import { Users, Receipt, DollarSign, Plus, Minus, Check, ChefHat, CreditCard, Banknote, Smartphone } from "lucide-react";

interface Table {
  id: number;
  number: string;
  status: "available" | "occupied" | "reserved";
  guests?: number;
  server?: string;
  receipt?: ReceiptData;
}

interface ReceiptData {
  id: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  startTime: string;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

const menuItems: MenuItem[] = [
  // Appetizers
  { id: "a1", name: "Caesar Salad", price: 14, category: "Appetizers" },
  { id: "a2", name: "Lobster Bisque", price: 18, category: "Appetizers" },
  { id: "a3", name: "Bruschetta", price: 12, category: "Appetizers" },
  // Mains
  { id: "m1", name: "Truffle Pasta", price: 28, category: "Mains" },
  { id: "m2", name: "Grilled Salmon", price: 35, category: "Mains" },
  { id: "m3", name: "Wagyu Steak", price: 65, category: "Mains" },
  // Desserts
  { id: "d1", name: "Chocolate Lava", price: 12, category: "Desserts" },
  { id: "d2", name: "Tiramisu", price: 10, category: "Desserts" },
  { id: "d3", name: "Cheesecake", price: 11, category: "Desserts" },
  // Drinks
  { id: "dr1", name: "Red Wine", price: 15, category: "Drinks" },
  { id: "dr2", name: "Sparkling Water", price: 5, category: "Drinks" },
  { id: "dr3", name: "Espresso", price: 4, category: "Drinks" },
];

const categories = ["Appetizers", "Mains", "Desserts", "Drinks"];

export default function StaffTables() {
  const [tables, setTables] = useState<Table[]>([
    { id: 1, number: "T1", status: "available" },
    { id: 2, number: "T2", status: "available" },
    { id: 3, number: "T3", status: "reserved", guests: 4 },
    { id: 4, number: "T4", status: "available" },
    { id: 5, number: "T5", status: "available" },
    { id: 6, number: "T6", status: "available" },
    { id: 7, number: "T7", status: "available" },
    { id: 8, number: "T8", status: "available" },
    { id: 9, number: "T9", status: "reserved", guests: 6 },
    { id: 10, number: "T10", status: "available" },
    { id: 11, number: "T11", status: "available" },
    { id: 12, number: "T12", status: "available" },
  ]);

  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [selectedTableIds, setSelectedTableIds] = useState<number[]>([]);
  const [isMergeMode, setIsMergeMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const [showGuestPrompt, setShowGuestPrompt] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "mobile" | null>(null);

  const statusColors = {
    available: "bg-[#4CAF50] hover:bg-[#4CAF50]/90",
    occupied: "bg-[#F44336] hover:bg-[#F44336]/90",
    reserved: "bg-[#FFC107] hover:bg-[#FFC107]/90",
    merged: "bg-[#2D2D2D] hover:bg-[#2D2D2D]/90",
  };

  const statusLabels = {
    available: "Available",
    occupied: "Occupied",
    reserved: "Reserved",
    merged: "Merged Group",
  };

  const handleTableClick = (table: Table) => {
    if (isMergeMode) {
      if (table.status === "available" || table.status === "merged") {
        setSelectedTableIds(prev => 
          prev.includes(table.id) ? prev.filter(id => id !== table.id) : [...prev, table.id]
        );
      }
      return;
    }

    if (table.status === "available" || table.status === "merged") {
      setSelectedTable(table);
      setShowGuestPrompt(true);
      setGuestCount(2);
    } else if (table.status === "occupied") {
      setSelectedTable(table);
    }
  };

  const handleMergeAction = () => {
    if (selectedTableIds.length < 2) return;
    
    // Create a new merged table entry or just update status
    const combinedNumber = "M-" + tables
      .filter(t => selectedTableIds.includes(t.id))
      .map(t => t.number.replace("T", ""))
      .join("+");

    setTables(prev => prev.map(t => 
      selectedTableIds.includes(t.id) 
        ? { ...t, status: "merged", number: combinedNumber } 
        : t
    ));
    
    setIsMergeMode(false);
    setSelectedTableIds([]);
  };

  const openTable = () => {
    if (selectedTable) {
      const now = new Date();
      const receipt: ReceiptData = {
        id: `R${selectedTable.number}-${now.getTime().toString().slice(-6)}`,
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0,
        startTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setTables(
        tables.map((t) =>
          t.id === selectedTable.id
            ? {
                ...t,
                status: "occupied",
                guests: guestCount,
                server: "Current User",
                receipt,
              }
            : t
        )
      );

      setSelectedTable({
        ...selectedTable,
        status: "occupied",
        guests: guestCount,
        receipt,
      });
      setShowGuestPrompt(false);
    }
  };

  const addItemToReceipt = (menuItem: MenuItem) => {
    if (!selectedTable || !selectedTable.receipt) return;

    const receipt = selectedTable.receipt;
    const existingItem = receipt.items.find((i) => i.id === menuItem.id);

    let updatedItems: OrderItem[];
    if (existingItem) {
      updatedItems = receipt.items.map((i) =>
        i.id === menuItem.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedItems = [
        ...receipt.items,
        { ...menuItem, quantity: 1, category: menuItem.category },
      ];
    }

    const subtotal = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const updatedReceipt = {
      ...receipt,
      items: updatedItems,
      subtotal,
      tax,
      total,
    };

    setTables(
      tables.map((t) =>
        t.id === selectedTable.id ? { ...t, receipt: updatedReceipt } : t
      )
    );
    setSelectedTable({ ...selectedTable, receipt: updatedReceipt });
  };

  const updateItemQuantity = (itemId: string, delta: number) => {
    if (!selectedTable || !selectedTable.receipt) return;

    const receipt = selectedTable.receipt;
    const updatedItems = receipt.items
      .map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + delta } : item
      )
      .filter((item) => item.quantity > 0);

    const subtotal = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const updatedReceipt = {
      ...receipt,
      items: updatedItems,
      subtotal,
      tax,
      total,
    };

    setTables(
      tables.map((t) =>
        t.id === selectedTable.id ? { ...t, receipt: updatedReceipt } : t
      )
    );
    setSelectedTable({ ...selectedTable, receipt: updatedReceipt });
  };

  const sendToKitchen = () => {
    if (!selectedTable || !selectedTable.receipt) return;
    alert(`Order sent to kitchen for ${selectedTable.number}!`);
  };

  const closeTable = () => {
    if (!selectedTable || !selectedTable.receipt || selectedTable.receipt.items.length === 0) {
      setTables(
        tables.map((t) =>
          t.id === selectedTable?.id
            ? { ...t, status: "available", guests: undefined, server: undefined, receipt: undefined }
            : t
        )
      );
      setSelectedTable(null);
      return;
    }
    
    setShowReceiptModal(true);
  };

  const proceedToPayment = () => {
    setShowReceiptModal(false);
    setShowPaymentModal(true);
  };

  const printReceipt = () => {
    alert(`Printing receipt ${selectedTable?.receipt?.id}...`);
  };

  const completePayment = () => {
    if (!selectedTable || !paymentMethod) return;

    alert(`Payment of $${selectedTable.receipt?.total.toFixed(2)} received via ${paymentMethod}!`);

    setTables(
      tables.map((t) =>
        t.id === selectedTable.id
          ? { ...t, status: "available", guests: undefined, server: undefined, receipt: undefined }
          : t
      )
    );
    
    setSelectedTable(null);
    setShowPaymentModal(false);
    setPaymentMethod(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F5F5F5] min-h-screen">
      {!selectedTable && (
        <div className="animate-in fade-in duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-[#2D2D2D] font-black text-2xl">Floor Plan</h2>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Staff Terminal · Area: All</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-200">
                <div className="flex gap-4">
                  {Object.entries(statusLabels).map(([status, label]) => (
                    <div key={status} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${statusColors[status as keyof typeof statusColors]}`} />
                      <span className="text-[10px] font-black text-gray-500 uppercase">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {isMergeMode ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => { setIsMergeMode(false); setSelectedTableIds([]); }}
                    className="px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-500 rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleMergeAction}
                    disabled={selectedTableIds.length < 2}
                    className={`px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 ${
                      selectedTableIds.length >= 2 
                        ? "bg-[#2D2D2D] text-white" 
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <Plus className="w-4 h-4 text-[#FF6B35]" />
                    Confirm Merge ({selectedTableIds.length})
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsMergeMode(true)}
                  className="px-6 py-2.5 bg-[#FF6B35] text-white rounded-xl font-bold shadow-lg shadow-orange-100 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <Users className="w-4 h-4" />
                  Merge Tables
                </button>
              )}
            </div>
          </div>

          {isMergeMode && (
            <div className="bg-[#2D2D2D] text-white p-4 rounded-2xl mb-6 flex items-center gap-3 animate-in slide-in-from-top-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">Merge Mode Active</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Select multiple available tables to combine into one party</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tables.map((table) => {
              const isSelected = selectedTableIds.includes(table.id);
              return (
                <button
                  key={table.id}
                  onClick={() => handleTableClick(table)}
                  className={`${
                    statusColors[table.status]
                  } text-white rounded-[2rem] p-8 shadow-xl transition-all transform relative overflow-hidden flex flex-col items-center justify-center gap-2 min-h-[160px] ${
                    isMergeMode && table.status !== "available" && table.status !== "merged" ? "opacity-30 cursor-not-allowed" : "hover:scale-105 active:scale-95"
                  } ${
                    isSelected ? "ring-8 ring-white/30 scale-105" : ""
                  }`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-[2rem]" />
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                  )}
                  <div className="text-4xl font-black">{table.number}</div>
                  {table.guests && (
                    <div className="flex items-center gap-1 text-xs font-bold bg-black/10 px-2 py-1 rounded-full">
                      <Users className="w-3 h-3" />
                      {table.guests}
                    </div>
                  )}
                  {table.receipt && (
                    <div className="text-sm font-bold mt-2 bg-white text-[#2D2D2D] px-3 py-1 rounded-full shadow-sm">
                      ${table.receipt.total.toFixed(2)}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* POS View - Receipt Management */}
      {selectedTable && selectedTable.status === "occupied" && (
        <div className="h-[calc(100vh-120px)] flex gap-6 animate-in slide-in-from-right-4 duration-500">
          {/* Left - Categories */}
          <div className="w-56 flex flex-col gap-3">
            <div className="bg-[#2D2D2D] text-white p-6 rounded-[2rem] shadow-xl">
              <h3 className="text-white text-lg font-black mb-1">Menu</h3>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Select Category</p>
            </div>
            <div className="space-y-2 flex-1 overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${
                    selectedCategory === category
                      ? "bg-[#FF6B35] text-white shadow-lg shadow-orange-100 scale-105"
                      : "bg-white hover:bg-orange-50 text-[#2D2D2D] shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedTable(null)}
              className="mt-4 w-full py-4 bg-white hover:bg-gray-50 text-[#2D2D2D] rounded-2xl font-bold shadow-sm transition-all flex items-center justify-center gap-2"
            >
              ← Back to Tables
            </button>
          </div>

          {/* Center - Menu Items */}
          <div className="flex-1 bg-white rounded-[2.5rem] p-8 shadow-xl overflow-y-auto border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-[#2D2D2D] text-2xl font-black">{selectedCategory}</h3>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-500 uppercase">
                {menuItems.filter(i => i.category === selectedCategory).length} Items
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter((item) => item.category === selectedCategory)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => addItemToReceipt(item)}
                    className="bg-gray-50 hover:bg-orange-50 group p-8 rounded-[2rem] transition-all transform hover:scale-105 active:scale-95 border-2 border-transparent hover:border-[#FF6B35] flex flex-col items-center justify-center gap-3 relative"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                      <Plus className="w-6 h-6" />
                    </div>
                    <p className="font-black text-[#2D2D2D] text-center leading-tight">{item.name}</p>
                    <p className="text-[#FF6B35] font-black">${item.price}</p>
                  </button>
                ))}
            </div>
          </div>

          {/* Right - Receipt */}
          <div className="w-[440px] bg-[#2D2D2D] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden">
            {/* Receipt Header */}
            <div className="p-8 border-b border-white/10 bg-black/20">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#FF6B35] px-4 py-2 rounded-full">
                  <h3 className="text-white text-xl font-black">{selectedTable.number}</h3>
                </div>
                <Receipt className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs text-white">
                    <Users className="w-3 h-3" />
                    {selectedTable.guests}
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    ID: {selectedTable.receipt?.id}
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-bold">{selectedTable.receipt?.startTime}</div>
              </div>
            </div>

            {/* Receipt Items */}
            <div className="flex-1 overflow-y-auto p-8">
              {!selectedTable.receipt?.items.length ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4 opacity-50">
                  <div className="w-20 h-20 rounded-full border-4 border-dashed border-gray-700 flex items-center justify-center">
                    <Plus className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest">Add Menu Items</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedTable.receipt.items.map((item) => (
                    <div key={item.id} className="bg-white/5 rounded-3xl p-5 border border-white/5 transition-all hover:bg-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <p className="text-white font-bold">{item.name}</p>
                          <p className="text-xs text-gray-400">${item.price} each</p>
                        </div>
                        <p className="text-[#FF6B35] font-black">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl">
                          <button
                            onClick={() => updateItemQuantity(item.id, -1)}
                            className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center text-white font-black text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateItemQuantity(item.id, 1)}
                            className="w-8 h-8 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-lg flex items-center justify-center transition-colors shadow-lg shadow-orange-900/20"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button className="text-[10px] text-gray-500 font-bold uppercase hover:text-red-400 transition-colors">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Receipt Footer */}
            <div className="p-8 bg-black/40 border-t border-white/10 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-white">${selectedTable.receipt?.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Tax (10%)</span>
                  <span className="text-white">${selectedTable.receipt?.tax.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-white font-black text-lg">Total</span>
                  <span className="text-[#FF6B35] font-black text-2xl">
                    ${selectedTable.receipt?.total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={sendToKitchen}
                  disabled={!selectedTable.receipt?.items.length}
                  className={`py-5 rounded-2xl flex items-center justify-center gap-3 transition-all font-black uppercase tracking-widest text-sm ${
                    selectedTable.receipt?.items.length
                      ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                      : "bg-white/5 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  <ChefHat className="w-5 h-5" />
                  Send
                </button>
                <button
                  onClick={closeTable}
                  className="py-5 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/20 font-black uppercase tracking-widest text-sm"
                >
                  <DollarSign className="w-5 h-5" />
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {/* Receipt Preview Modal */}
      {showReceiptModal && selectedTable && selectedTable.receipt && (
        <>
          <div className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-md" onClick={() => setShowReceiptModal(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[2.5rem] shadow-2xl z-[70] w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#2D2D2D] p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="text-white text-2xl font-black">Table {selectedTable.number}</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Receipt ID: {selectedTable.receipt.id}</p>
              </div>
              <div className="bg-[#FF6B35] p-3 rounded-2xl">
                <Receipt className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="p-10 max-h-[50vh] overflow-y-auto">
              <div className="space-y-4 border-b-2 border-dashed border-gray-100 pb-8 mb-8">
                {selectedTable.receipt.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-black text-[#2D2D2D]">{item.name}</p>
                      <p className="text-xs text-gray-500 font-bold">{item.quantity} x ${item.price.toFixed(2)}</p>
                    </div>
                    <p className="font-black text-[#2D2D2D]">${(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-[#2D2D2D]">${selectedTable.receipt.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Tax (10%)</span>
                  <span className="text-[#2D2D2D]">${selectedTable.receipt.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t-2 border-gray-50">
                  <span className="text-[#2D2D2D] font-black text-xl">TOTAL</span>
                  <span className="text-[#FF6B35] font-black text-3xl">${selectedTable.receipt.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 grid grid-cols-2 gap-4">
              <button
                onClick={printReceipt}
                className="py-5 border-2 border-[#2D2D2D] text-[#2D2D2D] rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95"
              >
                <Receipt className="w-5 h-5" />
                Print Receipt
              </button>
              <button
                onClick={proceedToPayment}
                className="py-5 bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-orange-200 hover:bg-[#FF6B35]/90 transition-all active:scale-95"
              >
                <CreditCard className="w-5 h-5" />
                Pay Bill
              </button>
            </div>
          </div>
        </>
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedTable && (
        <>
          <div
            className="fixed inset-0 bg-[#2D2D2D]/90 z-[80] backdrop-blur-xl"
            onClick={() => {
              setShowPaymentModal(false);
              setPaymentMethod(null);
            }}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[3rem] shadow-2xl z-[90] w-full max-w-md p-10 animate-in slide-in-from-bottom-8 duration-500">
            <h3 className="text-[#2D2D2D] text-3xl font-black mb-2 text-center">
              Payment
            </h3>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center mb-10">
              Table {selectedTable.number} · Total: ${selectedTable.receipt?.total.toFixed(2)}
            </p>

            <div className="space-y-4 mb-10">
              {[
                { id: "cash", icon: Banknote, label: "Cash", sub: "Collect physical currency" },
                { id: "card", icon: CreditCard, label: "Credit Card", sub: "Swipe or insert card" },
                { id: "mobile", icon: Smartphone, label: "Mobile Pay", sub: "NFC or QR Code" }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id as any)}
                  className={`w-full p-6 rounded-[2rem] border-2 transition-all flex items-center gap-5 group ${
                    paymentMethod === method.id
                      ? "border-[#FF6B35] bg-orange-50 scale-[1.02]"
                      : "border-gray-50 hover:border-gray-100"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${paymentMethod === method.id ? "bg-[#FF6B35] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}>
                    <method.icon className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-[#2D2D2D]">{method.label}</p>
                    <p className="text-xs text-gray-400 font-bold">{method.sub}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  setShowReceiptModal(true);
                }}
                className="py-5 bg-gray-50 text-[#2D2D2D] rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95"
              >
                Back
              </button>
              <button
                onClick={completePayment}
                disabled={!paymentMethod}
                className={`py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl active:scale-95 ${
                  paymentMethod
                    ? "bg-[#2D2D2D] text-white shadow-[#2D2D2D]/20"
                    : "bg-gray-100 text-gray-300 cursor-not-allowed shadow-none"
                }`}
              >
                Finalize
              </button>
            </div>
          </div>
        </>
      )}

      {/* Guest Count Prompt Modal */}
      {showGuestPrompt && selectedTable && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => {
              setShowGuestPrompt(false);
              setSelectedTable(null);
            }}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[2.5rem] shadow-2xl z-50 w-full max-w-sm p-10 animate-in zoom-in-95 duration-200">
            <h3 className="text-[#2D2D2D] text-2xl font-black mb-8 text-center">
              Open Table {selectedTable.number}
            </h3>

            <div className="mb-10">
              <label className="flex items-center justify-center gap-3 text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-6">
                <Users className="w-4 h-4 text-[#FF6B35]" />
                Number of Guests
              </label>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-16 h-16 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all text-2xl font-black active:scale-90"
                >
                  −
                </button>
                <span className="text-5xl font-black flex-1 text-center text-[#2D2D2D]">
                  {guestCount}
                </span>
                <button
                  onClick={() => setGuestCount(Math.min(12, guestCount + 1))}
                  className="w-16 h-16 bg-[#FF6B35] text-white rounded-2xl transition-all text-2xl font-black shadow-xl shadow-orange-100 active:scale-90"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setShowGuestPrompt(false);
                  setSelectedTable(null);
                }}
                className="py-5 bg-gray-50 text-[#2D2D2D] rounded-2xl font-black uppercase tracking-widest text-xs active:scale-95 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={openTable}
                className="py-5 bg-[#2D2D2D] text-white rounded-2xl font-black uppercase tracking-widest text-xs active:scale-95 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Start
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
