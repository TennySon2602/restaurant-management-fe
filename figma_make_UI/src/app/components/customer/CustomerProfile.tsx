import { Calendar, Heart, User, Mail, Phone, MapPin } from "lucide-react";

export default function CustomerProfile() {
  const reservationHistory = [
    { id: 1, date: "March 10, 2026", time: "7:00 PM", guests: 2, status: "Completed" },
    { id: 2, date: "February 25, 2026", time: "6:30 PM", guests: 4, status: "Completed" },
    { id: 3, date: "February 14, 2026", time: "8:00 PM", guests: 2, status: "Completed" },
  ];

  const favoriteDishes = [
    { id: 1, name: "Truffle Pasta", orders: 5 },
    { id: 2, name: "Grilled Salmon", orders: 3 },
    { id: 3, name: "Chocolate Lava", orders: 4 },
  ];

  return (
    <div className="max-w-lg mx-auto pb-6">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <h2 className="text-[#2D2D2D]">My Profile</h2>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Info */}
        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-[#2D2D2D]">John Doe</h3>
              <p className="text-sm text-muted-foreground">Member since Jan 2026</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-sm">john.doe@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-sm">Downtown, City 12345</span>
            </div>
          </div>
        </div>

        {/* Reservation History */}
        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-[#FF6B35]" />
            <h3 className="text-[#2D2D2D]">Reservation History</h3>
          </div>

          <div className="space-y-3">
            {reservationHistory.map((reservation) => (
              <div
                key={reservation.id}
                className="flex items-center justify-between p-4 bg-background rounded-lg"
              >
                <div>
                  <p className="text-sm">{reservation.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {reservation.time} · {reservation.guests} guest
                    {reservation.guests !== 1 ? "s" : ""}
                  </p>
                </div>
                <button className="text-xs bg-[#FF6B35] text-white px-3 py-1.5 rounded-full hover:bg-[#FF6B35]/90">
                  Book Again
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Dishes */}
        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-[#FF6B35]" />
            <h3 className="text-[#2D2D2D]">Favorite Dishes</h3>
          </div>

          <div className="space-y-3">
            {favoriteDishes.map((dish) => (
              <div
                key={dish.id}
                className="flex items-center justify-between p-4 bg-background rounded-lg"
              >
                <div>
                  <p className="text-sm">{dish.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Ordered {dish.orders} times
                  </p>
                </div>
                <Heart className="w-5 h-5 text-[#FF6B35] fill-[#FF6B35]" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Calendar className="w-6 h-6 text-[#FF6B35] mb-2 mx-auto" />
            <p className="text-sm text-center">New Reservation</p>
          </button>
          <button className="p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <User className="w-6 h-6 text-[#FF6B35] mb-2 mx-auto" />
            <p className="text-sm text-center">Edit Profile</p>
          </button>
        </div>
      </div>
    </div>
  );
}
