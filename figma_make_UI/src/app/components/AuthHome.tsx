import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Phone, Lock, Eye, EyeOff, ArrowRight, User, Users, Smartphone, BarChart3, ChevronLeft } from "lucide-react";

type AuthView = "login" | "register" | "role-select";
type Role = "customer" | "staff" | "manager";

export default function AuthHome() {
  const navigate = useNavigate();
  const [view, setView] = useState<AuthView>("login");
  const [role, setRole] = useState<Role>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Registration states
  const [regData, setRegData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock authentication
    setTimeout(() => {
      setIsLoading(false);
      // For demo, we navigate based on identifier or just to customer
      if (loginIdentifier.toLowerCase().includes("staff")) {
        navigate("/staff");
      } else if (loginIdentifier.toLowerCase().includes("manager")) {
        navigate("/manager");
      } else {
        navigate("/customer");
      }
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // After registration, go to role-specific dashboard
      if (role === "staff") navigate("/staff");
      else if (role === "manager") navigate("/manager");
      else navigate("/customer");
    }, 1000);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Left Column - Visual Branding */}
      <div className="hidden lg:block relative overflow-hidden bg-[#2D2D2D]">
        <img
          src="https://images.unsplash.com/photo-1770277375251-d394346bd4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBhbWJpZW50JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczNDA4NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Restaurant Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent" />
        
        <div className="absolute bottom-12 left-12 right-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <h2 className="text-white text-3xl font-black">Gastros</h2>
          </div>
          <h3 className="text-white text-5xl font-black leading-tight mb-4">
            Manage your flavors <br />
            <span className="text-[#FF6B35]">anywhere you are.</span>
          </h3>
          <p className="text-white/70 text-lg font-medium max-w-md">
            The all-in-one platform for rapid restaurant operations, bookings, and analytics.
          </p>
        </div>
      </div>

      {/* Right Column - Auth Forms */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-[#F5F5F5]">
        <div className="w-full max-w-md">
          {/* Logo Mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                <BarChart3 className="text-white w-5 h-5" />
              </div>
              <h2 className="text-[#2D2D2D] text-2xl font-black">Gastros</h2>
            </div>
          </div>

          {view === "login" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-3xl font-black text-[#2D2D2D] mb-2">Welcome Back</h1>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-8">
                Enter your credentials to continue
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    Email or Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      className="block w-full pl-11 pr-4 py-4 bg-white border-2 border-transparent focus:border-[#FF6B35] rounded-[1.25rem] font-bold text-[#2D2D2D] transition-all shadow-sm outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-11 pr-12 py-4 bg-white border-2 border-transparent focus:border-[#FF6B35] rounded-[1.25rem] font-bold text-[#2D2D2D] transition-all shadow-sm outline-none"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#FF6B35] transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]" />
                    <span className="text-xs font-bold text-gray-500 group-hover:text-gray-700 transition-colors">Remember me</span>
                  </label>
                  <button type="button" className="text-xs font-bold text-[#FF6B35] hover:underline">
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#2D2D2D] hover:bg-black text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? "Authenticating..." : "Login"}
                  {!isLoading && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>

              <div className="mt-6">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center mb-3">
                  Quick Demo Access
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => { setLoginIdentifier("user@example.com"); setPassword("password123"); }}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-500 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all"
                  >
                    Customer
                  </button>
                  <button
                    onClick={() => { setLoginIdentifier("staff@gastros.com"); setPassword("password123"); }}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-500 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all"
                  >
                    Staff
                  </button>
                  <button
                    onClick={() => { setLoginIdentifier("manager@gastros.com"); setPassword("password123"); }}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-500 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all"
                  >
                    Manager
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <p className="text-center text-sm font-bold text-gray-500">
                  New to Gastros?{" "}
                  <button
                    onClick={() => setView("register")}
                    className="text-[#FF6B35] hover:underline"
                  >
                    Create an account
                  </button>
                </p>
              </div>
            </div>
          )}

          {view === "register" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <button
                onClick={() => setView("login")}
                className="flex items-center gap-2 text-gray-400 hover:text-[#2D2D2D] transition-colors mb-6 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold text-xs uppercase tracking-widest">Back to Login</span>
              </button>

              <h1 className="text-3xl font-black text-[#2D2D2D] mb-2">Create Account</h1>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-8">
                Join our restaurant network
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <button
                  onClick={() => setRole("customer")}
                  className={`py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border-2 flex flex-col items-center gap-2 ${
                    role === "customer"
                      ? "border-[#FF6B35] bg-orange-50 text-[#FF6B35]"
                      : "border-transparent bg-white text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  <User className="w-5 h-5" />
                  Customer
                </button>
                <button
                  onClick={() => setRole("staff")}
                  className={`py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border-2 flex flex-col items-center gap-2 ${
                    role === "staff"
                      ? "border-[#FF6B35] bg-orange-50 text-[#FF6B35]"
                      : "border-transparent bg-white text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  Staff
                </button>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="block w-full px-4 py-4 bg-white border-2 border-transparent focus:border-[#FF6B35] rounded-[1.25rem] font-bold text-[#2D2D2D] transition-all shadow-sm outline-none"
                    placeholder="John Doe"
                    value={regData.name}
                    onChange={(e) => setRegData({...regData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    required
                    className="block w-full px-4 py-4 bg-white border-2 border-transparent focus:border-[#FF6B35] rounded-[1.25rem] font-bold text-[#2D2D2D] transition-all shadow-sm outline-none"
                    placeholder="you@email.com or +1..."
                    value={regData.emailOrPhone}
                    onChange={(e) => setRegData({...regData, emailOrPhone: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="block w-full px-4 py-4 bg-white border-2 border-transparent focus:border-[#FF6B35] rounded-[1.25rem] font-bold text-[#2D2D2D] transition-all shadow-sm outline-none"
                    placeholder="••••••••"
                    value={regData.password}
                    onChange={(e) => setRegData({...regData, password: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#FF6B35] hover:bg-[#E55A2B] text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-orange-100 active:scale-[0.98] disabled:opacity-50 mt-4"
                >
                  {isLoading ? "Creating Account..." : `Register as ${role}`}
                </button>
              </form>

              <p className="mt-8 text-center text-xs text-gray-400 font-bold px-4">
                By creating an account, you agree to our <br />
                <span className="text-[#2D2D2D] hover:underline cursor-pointer">Terms of Service</span> and <span className="text-[#2D2D2D] hover:underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
