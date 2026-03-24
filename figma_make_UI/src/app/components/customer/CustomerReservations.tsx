import { useState } from "react";
import { Calendar, Clock, Users, Check, MapPin, ChevronLeft, LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router";

interface Table {
  id: number;
  number: string;
  capacity: number;
  available: boolean;
  position: "window" | "center" | "patio" | "bar";
  shape: "circle" | "square" | "rectangle";
}

export default function CustomerReservations() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Reservation & Table Selection, 2: Confirmation
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("7:00 PM");
  const [guests, setGuests] = useState(2);
  const [selectedTableIds, setSelectedTableIds] = useState<number[]>([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const tables: Table[] = [
    // Window Section
    { id: 1, number: "W1", capacity: 2, available: true, position: "window", shape: "circle" },
    { id: 2, number: "W2", capacity: 2, available: true, position: "window", shape: "circle" },
    { id: 3, number: "W3", capacity: 4, available: false, position: "window", shape: "square" },
    { id: 13, number: "W4", capacity: 6, available: true, position: "window", shape: "rectangle" },
    // Center Section
    { id: 4, number: "C1", capacity: 4, available: true, position: "center", shape: "square" },
    { id: 5, number: "C2", capacity: 6, available: true, position: "center", shape: "rectangle" },
    { id: 6, number: "C3", capacity: 4, available: true, position: "center", shape: "square" },
    { id: 7, number: "C4", capacity: 2, available: false, position: "center", shape: "circle" },
    { id: 14, number: "C5", capacity: 8, available: true, position: "center", shape: "rectangle" },
    // Patio Section
    { id: 8, number: "P1", capacity: 2, available: true, position: "patio", shape: "circle" },
    { id: 9, number: "P2", capacity: 4, available: true, position: "patio", shape: "square" },
    { id: 10, number: "P3", capacity: 2, available: true, position: "patio", shape: "circle" },
    // Bar
    { id: 11, number: "B1", capacity: 1, available: true, position: "bar", shape: "circle" },
    { id: 12, number: "B2", capacity: 1, available: true, position: "bar", shape: "circle" },
  ];

  const timeSlots = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

  const handleConfirmReservation = () => {
    setShowConfirmationModal(true);
    setTimeout(() => {
      setShowConfirmationModal(false);
      navigate("/customer");
    }, 3000);
  };

  const selectedTables = tables.filter(t => selectedTableIds.includes(t.id));
  const totalSelectedCapacity = selectedTables.reduce((sum, t) => sum + t.capacity, 0);

  const handleTableToggle = (id: number) => {
    setSelectedTableIds(prev => {
      if (prev.includes(id)) return prev.filter(tid => tid !== id);
      // If guests <= 6, only allow 1 table (unless user wants more?)
      // For demo, if guests > 6, allow multiple.
      if (guests <= 6 && prev.length >= 1) return [id];
      return [...prev, id];
    });
  };

  return (
    <div className="max-w-lg mx-auto min-h-screen bg-[#F5F5F5] pb-24">
      {/* Navbar */}
      <div className="bg-white px-4 py-4 sticky top-0 z-20 flex items-center justify-between border-b border-gray-100">
        <button onClick={() => step > 1 ? setStep(step - 1) : navigate("/customer")} className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6 text-[#2D2D2D]" />
        </button>
        <h2 className="text-[#2D2D2D] font-black text-lg">
          {step === 1 ? "Book Your Table" : "Confirm Booking"}
        </h2>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <div className="p-6">
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            {/* 1. Guests, Date & Time (Upper Section) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl">
              <div className="grid grid-cols-1 gap-6">
                {/* Guest Selector */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                    <Users className="w-3.5 h-3.5 text-[#FF6B35]" />
                    Guest Count
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-12 h-12 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all text-xl font-black"
                    >
                      −
                    </button>
                    <span className="text-3xl font-black flex-1 text-center text-[#2D2D2D]">{guests}</span>
                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-12 h-12 bg-[#FF6B35] text-white rounded-xl transition-all text-xl font-black shadow-lg shadow-orange-100"
                    >
                      +
                    </button>
                  </div>
                  {guests >= 10 && (
                    <p className="text-center text-[8px] font-bold text-[#FF6B35] uppercase tracking-widest">
                      Large Group: Please select multiple tables
                    </p>
                  )}
                </div>

                {/* Date & Time Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-50 pt-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-[#FF6B35]" />
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-3 bg-gray-50 border-none rounded-xl font-bold text-sm text-[#2D2D2D] focus:ring-1 focus:ring-[#FF6B35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-[#FF6B35]" />
                      Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full p-3 bg-gray-50 border-none rounded-xl font-bold text-sm text-[#2D2D2D] focus:ring-1 focus:ring-[#FF6B35] appearance-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Visual Table Selection (Middle Section) */}
            <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#2D2D2D] font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-[#FF6B35]" />
                  Tap to Select Tables
                </h3>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-gray-200" title="Booked" />
                   <div className="w-2 h-2 rounded-full bg-white border border-gray-200" title="Free" />
                   <div className="w-2 h-2 rounded-full bg-[#FF6B35]" title="Selected" />
                </div>
              </div>

              {/* Restaurant Areas */}
              <div className="space-y-8">
                {/* Window Section */}
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-100 rounded-r-full" />
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-3">Window Side</p>
                  <div className="grid grid-cols-4 gap-3">
                    {tables.filter(t => t.position === "window").map(table => {
                      const isSelected = selectedTableIds.includes(table.id);
                      return (
                        <button
                          key={table.id}
                          disabled={!table.available}
                          onClick={() => handleTableToggle(table.id)}
                          className={`aspect-square flex flex-col items-center justify-center transition-all ${
                            table.shape === "circle" ? "rounded-full" : "rounded-xl"
                          } ${
                            isSelected
                              ? "bg-[#FF6B35] text-white shadow-xl scale-110 z-10"
                              : table.available
                              ? "bg-white border-2 border-gray-50 text-[#2D2D2D] hover:border-[#FF6B35]"
                              : "bg-gray-100 text-gray-300 cursor-not-allowed opacity-50"
                          }`}
                        >
                          <span className="text-[9px] font-black">{table.number}</span>
                          <span className="text-[7px] font-bold opacity-60">{table.capacity}P</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Center Section */}
                <div>
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-3">Main Dining</p>
                  <div className="grid grid-cols-3 gap-3">
                    {tables.filter(t => t.position === "center").map(table => {
                      const isSelected = selectedTableIds.includes(table.id);
                      return (
                        <button
                          key={table.id}
                          disabled={!table.available}
                          onClick={() => handleTableToggle(table.id)}
                          className={`p-3 flex flex-col items-center justify-center transition-all ${
                            table.shape === "rectangle" ? "aspect-[2/1] rounded-2xl" : "aspect-square rounded-[1.25rem]"
                          } ${
                            isSelected
                              ? "bg-[#FF6B35] text-white shadow-xl scale-105 z-10"
                              : table.available
                              ? "bg-white border-2 border-gray-50 text-[#2D2D2D] hover:border-[#FF6B35]"
                              : "bg-gray-100 text-gray-300 cursor-not-allowed opacity-50"
                          }`}
                        >
                          <span className="text-[10px] font-black">{table.number}</span>
                          <span className="text-[8px] font-bold opacity-60">{table.capacity}P</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Patio Section */}
                <div className="bg-green-50/20 -mx-6 px-6 py-4 rounded-3xl border-y border-green-50">
                  <p className="text-[8px] font-black text-green-200 uppercase tracking-widest mb-3">Garden Patio</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {tables.filter(t => t.position === "patio").map(table => {
                      const isSelected = selectedTableIds.includes(table.id);
                      return (
                        <button
                          key={table.id}
                          disabled={!table.available}
                          onClick={() => handleTableToggle(table.id)}
                          className={`w-12 h-12 flex flex-col items-center justify-center transition-all ${
                            table.shape === "circle" ? "rounded-full" : "rounded-xl"
                          } ${
                            isSelected
                              ? "bg-[#FF6B35] text-white shadow-xl scale-110"
                              : table.available
                              ? "bg-white border-2 border-gray-50 text-[#2D2D2D]"
                              : "bg-gray-100 text-gray-300 cursor-not-allowed"
                          }`}
                        >
                          <span className="text-[9px] font-black">{table.number}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Selection Summary Overlay (In-Screen) */}
              {selectedTableIds.length > 0 && (
                <div className="mt-6 bg-[#2D2D2D] text-white p-5 rounded-2xl flex items-center justify-between shadow-xl animate-in slide-in-from-bottom-2">
                  <div className="flex-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Seats Secured</p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black">{totalSelectedCapacity} / {guests}</span>
                      {totalSelectedCapacity < guests ? (
                        <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Need {guests - totalSelectedCapacity} More</span>
                      ) : (
                        <div className="bg-[#4CAF50] p-1 rounded-full">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Tables</p>
                    <p className="text-xs font-black text-[#FF6B35]">{selectedTables.map(t => t.number).join(", ")}</p>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Action Button */}
            <button
              disabled={selectedTableIds.length === 0 || totalSelectedCapacity < guests}
              onClick={() => setStep(2)}
              className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-xl transition-all active:scale-[0.98] ${
                selectedTableIds.length > 0 && totalSelectedCapacity >= guests 
                  ? "bg-[#FF6B35] text-white shadow-orange-100" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Confirm Selection →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#FF6B35]" />
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Calendar className="w-10 h-10 text-[#FF6B35]" />
              </div>
              <h3 className="text-[#2D2D2D] text-3xl font-black mb-2">Final Review</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10">La Cuisine Moderne</p>
              
              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center bg-gray-50 p-6 rounded-3xl">
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Date & Time</p>
                    <p className="text-lg font-black text-[#2D2D2D]">{date}</p>
                    <p className="text-sm font-bold text-[#FF6B35]">{time}</p>
                  </div>
                  <Clock className="w-8 h-8 text-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 rounded-3xl text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
                      {selectedTableIds.length === 1 ? "Table" : "Tables"}
                    </p>
                    <p className="text-xl font-black text-[#2D2D2D]">
                      {selectedTables.map(t => t.number).join(", ")}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      {selectedTables[0]?.position} area
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-3xl text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Guests</p>
                    <p className="text-2xl font-black text-[#2D2D2D]">{guests}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Capacity: {totalSelectedCapacity}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-3xl text-left mb-10">
                <MapPin className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                <p className="text-sm font-bold text-[#2D2D2D] leading-snug">
                  123 Gourmet Street, Downtown<br />
                  <span className="text-xs text-gray-400 font-normal">Please arrive 10 mins early.</span>
                </p>
              </div>

              <button
                onClick={handleConfirmReservation}
                className="w-full py-6 bg-[#2D2D2D] text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl transition-all active:scale-[0.95]"
              >
                Secure Reservation
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Final Success Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] p-6">
          <div className="absolute inset-0 bg-[#2D2D2D]/95 backdrop-blur-md animate-in fade-in duration-500" />
          <div className="bg-white rounded-[3rem] p-12 shadow-2xl z-10 max-w-sm w-full text-center animate-in zoom-in-95 duration-300">
            <div className="w-24 h-24 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-500/20">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-[#2D2D2D] text-3xl font-black mb-4">Table Secured!</h3>
            <p className="text-gray-500 font-bold leading-relaxed mb-8">
              We've reserved {selectedTables.map(t => t.number).join(", ")} for you. A confirmation has been sent to your phone.
            </p>
            <div className="w-12 h-2 bg-gray-100 rounded-full mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
