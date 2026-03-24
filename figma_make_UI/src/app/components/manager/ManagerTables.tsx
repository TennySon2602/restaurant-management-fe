import { useState } from "react";
import { Plus, Edit2, Trash2, Users, MapPin, LayoutGrid, Check, X } from "lucide-react";

interface Table {
  id: number;
  number: string;
  capacity: number;
  position: "Main Hall" | "Window" | "Patio" | "Bar";
  shape: "circle" | "square" | "rectangle";
}

interface MergedTablePreset {
  id: string;
  name: string;
  tableIds: number[];
  totalCapacity: number;
}

export default function ManagerTables() {
  const [tables, setTables] = useState<Table[]>([
    { id: 1, number: "T1", capacity: 2, position: "Window", shape: "circle" },
    { id: 2, number: "T2", capacity: 2, position: "Window", shape: "circle" },
    { id: 3, number: "T3", capacity: 4, position: "Main Hall", shape: "square" },
    { id: 4, number: "T4", capacity: 4, position: "Main Hall", shape: "square" },
    { id: 5, number: "T5", capacity: 2, position: "Bar", shape: "circle" },
    { id: 6, number: "T6", capacity: 2, position: "Bar", shape: "circle" },
    { id: 7, number: "T7", capacity: 6, position: "Window", shape: "rectangle" },
    { id: 8, number: "T8", capacity: 4, position: "Main Hall", shape: "square" },
  ]);

  const [mergedPresets, setMergedPresets] = useState<MergedTablePreset[]>([
    { id: "m1", name: "Grand Window Set", tableIds: [1, 2, 7], totalCapacity: 10 },
    { id: "m2", name: "Hall Banquet", tableIds: [3, 4, 8], totalCapacity: 12 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMergeModalOpen, setIsMergeModalOpen] = useState(false);
  const [editingTable, setEditingTable] = useState<Table | null>(null);

  // Merge Preset Form
  const [mergeFormData, setMergeFormData] = useState<{ name: string; tableIds: number[] }>({
    name: "",
    tableIds: [],
  });

  // Form states
  const [formData, setFormData] = useState<Omit<Table, "id">>({
    number: "",
    capacity: 2,
    position: "Main Hall",
    shape: "square",
  });

  const openAddModal = () => {
    setEditingTable(null);
    setFormData({
      number: `T${tables.length + 1}`,
      capacity: 2,
      position: "Main Hall",
      shape: "square",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (table: Table) => {
    setEditingTable(table);
    setFormData({
      number: table.number,
      capacity: table.capacity,
      position: table.position,
      shape: table.shape,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTable(null);
  };

  const handleSave = () => {
    if (editingTable) {
      setTables(tables.map(t => t.id === editingTable.id ? { ...formData, id: t.id } : t));
    } else {
      setTables([...tables, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to remove this table?")) {
      setTables(tables.filter(t => t.id !== id));
    }
  };

  const openMergeModal = () => {
    setMergeFormData({ name: `Merge ${mergedPresets.length + 1}`, tableIds: [] });
    setIsMergeModalOpen(true);
  };

  const closeMergeModal = () => {
    setIsMergeModalOpen(false);
  };

  const handleSaveMerge = () => {
    const totalCap = tables
      .filter(t => mergeFormData.tableIds.includes(t.id))
      .reduce((sum, t) => sum + t.capacity, 0);
    
    setMergedPresets([...mergedPresets, {
      id: `m${Date.now()}`,
      name: mergeFormData.name,
      tableIds: mergeFormData.tableIds,
      totalCapacity: totalCap,
    }]);
    closeMergeModal();
  };

  const deleteMergePreset = (id: string) => {
    setMergedPresets(mergedPresets.filter(p => p.id !== id));
  };

  const positions = ["Main Hall", "Window", "Patio", "Bar"];
  const shapes = ["circle", "square", "rectangle"];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#2D2D2D]">Floor Plan & Groups</h3>
          <p className="text-sm text-muted-foreground mt-1">Configure individual tables and merge presets for large parties.</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={openMergeModal}
            className="bg-[#2D2D2D] hover:bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg"
          >
            <Users className="w-5 h-5 text-[#FF6B35]" />
            Merge Preset
          </button>
          <button
            onClick={openAddModal}
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-orange-100"
          >
            <Plus className="w-5 h-5" />
            Add New Table
          </button>
        </div>
      </div>

      {/* Merged Table Section - New */}
      <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
            <LayoutGrid className="text-[#FF6B35] w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-[#2D2D2D]">Large Group Presets</h4>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Optimized for 10+ Guests</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mergedPresets.map((preset) => (
            <div key={preset.id} className="bg-gray-50 rounded-3xl p-6 relative group overflow-hidden border-2 border-transparent hover:border-[#FF6B35]/20 transition-all">
              <button 
                onClick={() => deleteMergePreset(preset.id)}
                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <h5 className="font-black text-[#2D2D2D] text-lg mb-1">{preset.name}</h5>
              <p className="text-[#FF6B35] font-black text-sm mb-4">{preset.totalCapacity} Total Seats</p>
              
              <div className="flex flex-wrap gap-2">
                {preset.tableIds.map(tid => {
                  const t = tables.find(t => t.id === tid);
                  return (
                    <span key={tid} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-500">
                      Table {t?.number}
                    </span>
                  );
                })}
              </div>

              <div className="mt-4 flex -space-x-3 overflow-hidden">
                {preset.tableIds.map(tid => (
                  <div key={tid} className="w-8 h-8 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center text-[10px] font-bold text-[#FF6B35]">
                    {tables.find(t => t.id === tid)?.number}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Total Tables</p>
          <p className="text-2xl text-[#2D2D2D] mt-1 font-black">{tables.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Total Capacity</p>
          <p className="text-2xl text-[#2D2D2D] mt-1 font-black">
            {tables.reduce((sum, t) => sum + t.capacity, 0)} Seats
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Main Hall Tables</p>
          <p className="text-2xl text-[#2D2D2D] mt-1 font-black">
            {tables.filter(t => t.position === "Main Hall").length}
          </p>
        </div>
      </div>

      {/* Table Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tables.map((table) => (
          <div
            key={table.id}
            className="bg-card rounded-[2rem] p-6 shadow-md border border-border group hover:border-[#FF6B35] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 flex gap-2 translate-y-[-100%] group-hover:translate-y-0 transition-transform">
              <button
                onClick={() => openEditModal(table)}
                className="w-8 h-8 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:text-[#FF6B35] shadow-sm transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(table.id)}
                className="w-8 h-8 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 shadow-sm transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-4 py-4">
              <div
                className={`w-20 h-20 flex items-center justify-center border-4 border-dashed border-gray-100 ${
                  table.shape === "circle" ? "rounded-full" : table.shape === "rectangle" ? "w-32 rounded-2xl" : "rounded-2xl"
                }`}
              >
                <span className="text-2xl font-black text-[#2D2D2D]">{table.number}</span>
              </div>
              
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{table.capacity} Seats</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium">
                  <MapPin className="w-3 h-3 text-[#FF6B35]" />
                  <span>{table.position}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Merge Modal */}
      {isMergeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm" onClick={closeMergeModal} />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#2D2D2D] p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl font-black">Merge Table Preset</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Combine tables for large groups</p>
              </div>
              <button onClick={closeMergeModal} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Preset Name</label>
                <input
                  type="text"
                  value={mergeFormData.name}
                  onChange={(e) => setMergeFormData({ ...mergeFormData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl font-bold text-[#2D2D2D] focus:ring-2 focus:ring-[#FF6B35]"
                  placeholder="e.g. Banquet A"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Select Tables to Combine</label>
                <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                  {tables.map(table => (
                    <button
                      key={table.id}
                      onClick={() => {
                        const newIds = mergeFormData.tableIds.includes(table.id)
                          ? mergeFormData.tableIds.filter(id => id !== table.id)
                          : [...mergeFormData.tableIds, table.id];
                        setMergeFormData({ ...mergeFormData, tableIds: newIds });
                      }}
                      className={`p-4 rounded-2xl flex flex-col items-start gap-1 transition-all border-2 ${
                        mergeFormData.tableIds.includes(table.id)
                          ? "border-[#FF6B35] bg-orange-50"
                          : "border-gray-50 bg-gray-50 text-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      <span className={`font-black text-sm ${mergeFormData.tableIds.includes(table.id) ? "text-[#2D2D2D]" : ""}`}>
                        Table {table.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase opacity-60">
                        {table.capacity} Seats · {table.position}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#FF6B35] font-black uppercase tracking-widest">Calculated Capacity</p>
                  <p className="text-2xl font-black text-[#2D2D2D]">
                    {tables.filter(t => mergeFormData.tableIds.includes(t.id)).reduce((sum, t) => sum + t.capacity, 0)} Seats
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#FF6B35]">
                  <Users className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 flex gap-4">
              <button
                onClick={closeMergeModal}
                className="flex-1 py-4 bg-white border border-gray-200 text-gray-500 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveMerge}
                disabled={mergeFormData.tableIds.length < 2}
                className={`flex-1 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 ${
                  mergeFormData.tableIds.length >= 2 
                    ? "bg-[#FF6B35] text-white shadow-orange-200" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Save Preset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#2D2D2D] p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl font-black">
                  {editingTable ? "Edit Table" : "Add New Table"}
                </h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                  Floor Plan Configuration
                </p>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Table Number & Capacity */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    Table Number
                  </label>
                  <input
                    type="text"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl font-bold text-[#2D2D2D] focus:ring-2 focus:ring-[#FF6B35] transition-all"
                    placeholder="e.g. T10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    Capacity
                  </label>
                  <div className="flex items-center bg-gray-50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setFormData({ ...formData, capacity: Math.max(1, formData.capacity - 1) })}
                      className="p-3 hover:bg-gray-100 text-gray-500 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center font-bold text-[#2D2D2D]">{formData.capacity}</span>
                    <button
                      onClick={() => setFormData({ ...formData, capacity: formData.capacity + 1 })}
                      className="p-3 hover:bg-gray-100 text-[#FF6B35] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Position / Area */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                  Area / Position
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {positions.map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setFormData({ ...formData, position: pos as any })}
                      className={`px-4 py-3 rounded-xl font-bold text-sm transition-all border-2 ${
                        formData.position === pos
                          ? "border-[#FF6B35] bg-orange-50 text-[#FF6B35]"
                          : "border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shape */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                  Table Shape
                </label>
                <div className="flex gap-4">
                  {shapes.map((shape) => (
                    <button
                      key={shape}
                      onClick={() => setFormData({ ...formData, shape: shape as any })}
                      className={`flex-1 aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                        formData.shape === shape
                          ? "border-[#FF6B35] bg-orange-50 text-[#FF6B35]"
                          : "border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      <div className={`border-2 border-current ${
                        shape === "circle" ? "w-6 h-6 rounded-full" : shape === "rectangle" ? "w-8 h-4 rounded-sm" : "w-6 h-6 rounded-sm"
                      }`} />
                      <span className="text-[10px] font-bold uppercase">{shape}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 flex gap-4">
              <button
                onClick={closeModal}
                className="flex-1 py-4 bg-white border border-gray-200 text-gray-500 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-4 bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-orange-200 active:scale-95"
              >
                {editingTable ? "Save Changes" : "Create Table"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Minus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
