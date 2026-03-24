import { useState } from "react";
import { Search, Filter, Download, Calendar, DollarSign, CreditCard, Banknote, Smartphone, Receipt, ChevronRight } from "lucide-react";

interface PaymentHistoryRecord {
  id: string;
  table: string;
  amount: number;
  method: "cash" | "card" | "mobile";
  time: string;
  date: string;
  server: string;
  status: "completed" | "refunded";
}

export default function StaffPayments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMethod, setFilterMethod] = useState<string>("all");

  const history: PaymentHistoryRecord[] = [
    { id: "R-T1-892134", table: "T1", amount: 86.00, method: "card", time: "12:45 PM", date: "2024-03-13", server: "John D.", status: "completed" },
    { id: "R-T4-892145", table: "T4", amount: 124.50, method: "cash", time: "1:15 PM", date: "2024-03-13", server: "Sarah K.", status: "completed" },
    { id: "R-T6-892156", table: "T6", amount: 35.20, method: "mobile", time: "1:30 PM", date: "2024-03-13", server: "John D.", status: "completed" },
    { id: "R-T2-892167", table: "T2", amount: 54.00, method: "card", time: "2:05 PM", date: "2024-03-13", server: "Mike R.", status: "completed" },
    { id: "R-T9-892178", table: "T9", amount: 210.00, method: "card", time: "2:45 PM", date: "2024-03-13", server: "Sarah K.", status: "completed" },
    { id: "R-T3-892189", table: "T3", amount: 92.40, method: "cash", time: "3:10 PM", date: "2024-03-13", server: "John D.", status: "completed" },
  ];

  const filteredHistory = history.filter(record => {
    const matchesSearch = record.table.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMethod = filterMethod === "all" || record.method === filterMethod;
    return matchesSearch && matchesMethod;
  });

  const methodIcons = {
    cash: Banknote,
    card: CreditCard,
    mobile: Smartphone
  };

  const totalSales = filteredHistory.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#F5F5F5] min-h-screen">
      {/* Header & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 flex items-center justify-between">
          <div>
            <h2 className="text-[#2D2D2D] text-3xl font-black mb-1">Payment History</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Manage & audit past transactions</p>
          </div>
        </div>
        <div className="bg-[#2D2D2D] p-6 rounded-[2rem] shadow-xl text-white flex items-center justify-between overflow-hidden relative">
          <div className="absolute right-0 top-0 w-24 h-24 bg-[#FF6B35]/20 rounded-bl-[4rem]" />
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Total Sales (Today)</p>
            <p className="text-3xl font-black text-[#FF6B35]">${totalSales.toFixed(2)}</p>
          </div>
          <div className="bg-white/10 p-3 rounded-2xl">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by table or receipt ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] font-bold text-sm"
          />
        </div>
        <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
          {["all", "cash", "card", "mobile"].map((method) => (
            <button
              key={method}
              onClick={() => setFilterMethod(method)}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                filterMethod === method
                  ? "bg-[#FF6B35] text-white shadow-lg shadow-orange-100"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
        <button className="bg-[#2D2D2D] text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-2 font-bold text-sm">
          <Download className="w-5 h-5" />
          Export
        </button>
      </div>

      {/* History List */}
      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">Receipt ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">Table</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">Amount</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">Method</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">Time</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">Server</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((record) => {
                const Icon = methodIcons[record.method];
                return (
                  <tr key={record.id} className="group hover:bg-gray-50 transition-colors">
                    <td className="p-6 border-b border-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6B35]">
                          <Receipt className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm text-[#2D2D2D]">{record.id}</span>
                      </div>
                    </td>
                    <td className="p-6 border-b border-gray-50">
                      <div className="bg-[#2D2D2D] text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shadow-md">
                        {record.table}
                      </div>
                    </td>
                    <td className="p-6 border-b border-gray-50">
                      <span className="font-black text-[#FF6B35]">${record.amount.toFixed(2)}</span>
                    </td>
                    <td className="p-6 border-b border-gray-50">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Icon className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">{record.method}</span>
                      </div>
                    </td>
                    <td className="p-6 border-b border-gray-50 text-xs font-bold text-gray-500 uppercase">{record.time}</td>
                    <td className="p-6 border-b border-gray-50 text-xs font-bold text-gray-500 uppercase">{record.server}</td>
                    <td className="p-6 border-b border-gray-50">
                      <button className="p-2 hover:bg-white rounded-xl shadow-none hover:shadow-sm border border-transparent hover:border-gray-100 transition-all text-[#2D2D2D]">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filteredHistory.length === 0 && (
          <div className="p-20 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No records found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
