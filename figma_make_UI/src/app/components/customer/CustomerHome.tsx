import { useNavigate } from "react-router";
import { MapPin, Clock, Calendar, LayoutGrid, Check, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";

export default function CustomerHome() {
  const navigate = useNavigate();
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [guests, setGuests] = useState(2);
  const [reservationDate, setReservationDate] = useState(new Date().toISOString().split("T")[0]);
  const [reservationTime, setReservationTime] = useState("7:00 PM");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const tables = [
    { id: 1, number: "T1", capacity: 2, available: true, position: "window" },
    { id: 2, number: "T2", capacity: 2, available: true, position: "window" },
    { id: 3, number: "T3", capacity: 4, available: false, position: "center" },
    { id: 4, number: "T4", capacity: 4, available: true, position: "center" },
    { id: 5, number: "T5", capacity: 2, available: true, position: "bar" },
    { id: 6, number: "T6", capacity: 2, available: false, position: "bar" },
    { id: 7, number: "T7", capacity: 6, available: true, position: "window" },
    { id: 8, number: "T8", capacity: 4, available: true, position: "center" },
    { id: 9, number: "T9", capacity: 6, available: false, position: "window" },
    { id: 10, number: "T10", capacity: 2, available: true, position: "center" },
  ];

  const popularDishes = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: "$28",
      image: "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3MzM3NTExMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Grilled Salmon",
      price: "$35",
      image: "https://images.unsplash.com/photo-1759277513194-fee965299c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwcGxhdGVkJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzM0MDQ4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Chocolate Lava",
      price: "$12",
      image: "https://images.unsplash.com/photo-1722673353577-350697f89b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZmFuY3klMjBwbGF0ZWR8ZW58MXx8fHwxNzczNDA0ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const handleBookTable = () => {
    if (selectedTable) {
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setShowFloorPlan(false);
        setSelectedTable(null);
      }, 3000);
    }
  };

  return (
    <div className="max-w-lg mx-auto min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50JTIwZGluaW5nfGVufDF8fHx8MTc3MzM1MTMyNXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 to-transparent flex items-end">
          <div className="p-6 text-white w-full flex justify-between items-end">
            <div>
              <h1 className="text-white text-2xl font-bold mb-1">La Cuisine Moderne</h1>
              <p className="text-sm text-white/90">Fine Dining Experience</p>
            </div>
            <div className="bg-[#FF6B35] px-3 py-1 rounded-full text-xs font-bold">
              OPEN NOW
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 space-y-4">
        {/* Quick Reservation Button */}
        <button
          onClick={() => navigate("/customer/reservations")}
          className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
        >
          <Calendar className="w-6 h-6" />
          <div className="text-left">
            <p className="font-bold leading-none text-white">Book a Table</p>
            <p className="text-xs text-white/80 mt-1">Select your favorite spot</p>
          </div>
        </button>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <Clock className="w-5 h-5 text-[#FF6B35] mb-2" />
            <p className="text-[10px] text-gray-500 uppercase font-bold">Next Slot</p>
            <p className="text-sm font-bold">Today, 7:30 PM</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <MapPin className="w-5 h-5 text-[#FF6B35] mb-2" />
            <p className="text-[10px] text-gray-500 uppercase font-bold">Distance</p>
            <p className="text-sm font-bold">0.8 miles away</p>
          </div>
        </div>

        {/* Menu Quick Access */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#FF6B35]">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold">Explore Menu</p>
              <p className="text-xs text-gray-500">Seasonal specialties</p>
            </div>
          </div>
          <button 
            onClick={() => navigate("/customer/menu")}
            className="text-[#FF6B35] text-sm font-bold"
          >
            View
          </button>
        </div>

        {/* Popular Dishes */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-[#2D2D2D] font-bold">Chef's Recommendations</h3>
            <button className="text-xs text-gray-500 font-bold uppercase tracking-wider">Show More</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            {popularDishes.map((dish) => (
              <div key={dish.id} className="min-w-[140px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-[#FF6B35]">
                    {dish.price}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold truncate text-[#2D2D2D]">{dish.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/80 backdrop-blur-sm" />
          <div className="bg-white rounded-3xl p-8 shadow-2xl z-10 max-w-sm w-full text-center animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[#2D2D2D] text-xl font-bold mb-2">Reservation Secured!</h3>
            <p className="text-gray-500 text-sm mb-6">
              We've reserved Table {tables.find(t => t.id === selectedTable)?.number} for you at {reservationTime}.
            </p>
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400">Date</span>
                <span className="font-bold">{reservationDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Guests</span>
                <span className="font-bold">{guests} People</span>
              </div>
            </div>
            <button 
              onClick={() => setShowConfirmation(false)}
              className="w-full py-4 bg-[#2D2D2D] text-white rounded-2xl font-bold"
            >
              Great, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
