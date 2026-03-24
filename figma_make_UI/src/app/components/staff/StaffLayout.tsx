import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { LayoutGrid, CreditCard, Clock, LogOut } from "lucide-react";

export default function StaffLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const tabs = [
    { path: "/staff", label: "Tables", icon: LayoutGrid },
    { path: "/staff/payments", label: "Payments History", icon: CreditCard },
    { path: "/staff/shift", label: "Shift", icon: Clock },
  ];

  const isActive = (path: string) => {
    if (path === "/staff") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-[#2D2D2D] text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h2 className="text-white">Staff POS System</h2>
            <p className="text-sm text-white/70 mt-1">Table & Order Management</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-bold text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab.path);
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex-1 flex items-center justify-center gap-2 py-4 border-b-2 transition-colors ${
                  active
                    ? "border-[#FF6B35] text-[#FF6B35]"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}