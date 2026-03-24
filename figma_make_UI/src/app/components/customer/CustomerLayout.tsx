import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Home, UtensilsCrossed, Calendar, User, LogOut, BarChart3 } from "lucide-react";

export default function CustomerLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const tabs = [
    { path: "/customer", label: "Home", icon: Home },
    { path: "/customer/menu", label: "Menu", icon: UtensilsCrossed },
    { path: "/customer/reservations", label: "Reservations", icon: Calendar },
    { path: "/customer/profile", label: "Profile", icon: User },
  ];

  const isActive = (path: string) => {
    if (path === "/customer") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      {/* Mobile Top Header */}
      <header className="bg-white px-4 py-3 border-b border-gray-200 sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
            <BarChart3 className="text-white w-4 h-4" />
          </div>
          <span className="font-black text-[#2D2D2D] tracking-tight">Gastros</span>
        </div>
        <button
          onClick={handleLogout}
          className="p-2 text-gray-400 hover:text-[#FF6B35] transition-colors"
          aria-label="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg">
        <div className="max-w-lg mx-auto grid grid-cols-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab.path);
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex flex-col items-center gap-1 py-3 px-2 transition-colors ${
                  active
                    ? "text-[#FF6B35]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
