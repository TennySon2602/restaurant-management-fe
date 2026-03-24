import { useState } from "react";
import { Plus, Edit, Trash2, Percent, Calendar, Tag, X } from "lucide-react";

interface Discount {
  id: number;
  name: string;
  code: string;
  type: "percentage" | "fixed";
  value: number;
  validFrom: string;
  validUntil: string;
  active: boolean;
  minOrderValue?: number;
}

export default function ManagerDiscounts() {
  const [discounts, setDiscounts] = useState<Discount[]>([
    {
      id: 1,
      name: "Happy Hour",
      code: "HAPPY20",
      type: "percentage",
      value: 20,
      validFrom: "2026-03-16",
      validUntil: "2026-06-30",
      active: true,
      minOrderValue: 50,
    },
    {
      id: 2,
      name: "Weekend Special",
      code: "WEEKEND15",
      type: "percentage",
      value: 15,
      validFrom: "2026-03-01",
      validUntil: "2026-12-31",
      active: true,
    },
    {
      id: 3,
      name: "First Time Customer",
      code: "WELCOME10",
      type: "fixed",
      value: 10,
      validFrom: "2026-01-01",
      validUntil: "2026-12-31",
      active: true,
    },
    {
      id: 4,
      name: "Group Dining",
      code: "GROUP25",
      type: "percentage",
      value: 25,
      validFrom: "2026-03-01",
      validUntil: "2026-04-30",
      active: false,
      minOrderValue: 200,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDiscount, setEditingDiscount] = useState<Discount | null>(null);

  const toggleActive = (id: number) => {
    setDiscounts(
      discounts.map((d) =>
        d.id === id ? { ...d, active: !d.active } : d
      )
    );
  };

  const deleteDiscount = (id: number) => {
    if (confirm("Are you sure you want to delete this discount?")) {
      setDiscounts(discounts.filter((d) => d.id !== id));
    }
  };

  const openAddModal = () => {
    setEditingDiscount(null);
    setIsModalOpen(true);
  };

  const openEditModal = (discount: Discount) => {
    setEditingDiscount(discount);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#2D2D2D]">Discount Management</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Create and manage promotional discount codes
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="px-6 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-lg flex items-center gap-2 transition-colors font-bold shadow-lg shadow-orange-100"
        >
          <Plus className="w-5 h-5" />
          New Discount
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Total Discounts</p>
          <p className="text-2xl text-[#2D2D2D] mt-1 font-black">{discounts.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl text-[#4CAF50] mt-1 font-black">
            {discounts.filter((d) => d.active).length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Inactive</p>
          <p className="text-2xl text-muted-foreground mt-1 font-black">
            {discounts.filter((d) => !d.active).length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Avg. Discount</p>
          <p className="text-2xl text-[#FF6B35] mt-1 font-black">
            {Math.round(discounts.reduce((sum, d) => sum + (d.type === "percentage" ? d.value : 0), 0) / discounts.filter(d => d.type === "percentage").length)}%
          </p>
        </div>
      </div>

      {/* Discount List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discounts.map((discount) => (
          <div
            key={discount.id}
            className={`bg-card rounded-[2rem] p-6 shadow-md border-2 transition-all hover:shadow-xl ${
              discount.active ? "border-transparent hover:border-[#FF6B35]/30" : "border-gray-200 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  discount.active ? "bg-orange-50" : "bg-gray-100"
                }`}>
                  {discount.type === "percentage" ? (
                    <Percent className={`w-6 h-6 ${discount.active ? "text-[#FF6B35]" : "text-gray-400"}`} />
                  ) : (
                    <Tag className={`w-6 h-6 ${discount.active ? "text-[#FF6B35]" : "text-gray-400"}`} />
                  )}
                </div>
                <div>
                  <h4 className="font-black text-[#2D2D2D]">{discount.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      discount.active ? "bg-[#4CAF50]/10 text-[#4CAF50]" : "bg-gray-100 text-gray-400"
                    }`}>
                      {discount.active ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Promo Code</p>
                <p className="text-lg font-black text-[#FF6B35] font-mono tracking-wider">{discount.code}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Value</p>
                  <p className="text-xl font-black text-[#2D2D2D]">
                    {discount.type === "percentage" ? `${discount.value}%` : `$${discount.value}`}
                  </p>
                </div>
                {discount.minOrderValue && (
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Min. Order</p>
                    <p className="text-xl font-black text-[#2D2D2D]">${discount.minOrderValue}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span className="font-bold">
                  {new Date(discount.validFrom).toLocaleDateString()} - {new Date(discount.validUntil).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <button
                onClick={() => toggleActive(discount.id)}
                className={`flex-1 py-2 rounded-xl transition-all font-bold text-xs uppercase tracking-widest ${
                  discount.active 
                    ? "bg-gray-100 text-gray-500 hover:bg-gray-200" 
                    : "bg-[#4CAF50]/10 text-[#4CAF50] hover:bg-[#4CAF50]/20"
                }`}
              >
                {discount.active ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() => openEditModal(discount)}
                className="p-2 bg-orange-50 hover:bg-orange-100 text-[#FF6B35] rounded-xl transition-colors"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteDiscount(discount.id)}
                className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#2D2D2D] p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl font-black">
                  {editingDiscount ? "Edit Discount" : "Create New Discount"}
                </h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                  Promotional Management
                </p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-4">
              <p className="text-sm text-gray-500 text-center font-bold">
                This is a demo modal. In production, you would have form fields for:<br />
                Name, Code, Type, Value, Valid From/Until, Min Order Value, and Active Status.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-4 bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-orange-200 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
