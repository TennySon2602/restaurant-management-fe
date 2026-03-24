import { DollarSign, Users, TrendingUp, Calendar, AlertTriangle, LayoutDashboard } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { day: "Mon", revenue: 2400 },
  { day: "Tue", revenue: 2800 },
  { day: "Wed", revenue: 3200 },
  { day: "Thu", revenue: 2900 },
  { day: "Fri", revenue: 4200 },
  { day: "Sat", revenue: 5100 },
  { day: "Sun", revenue: 4800 },
];

const peakHoursData = [
  { hour: "11 AM", orders: 15 },
  { hour: "12 PM", orders: 32 },
  { hour: "1 PM", orders: 45 },
  { hour: "6 PM", orders: 38 },
  { hour: "7 PM", orders: 52 },
  { hour: "8 PM", orders: 48 },
  { hour: "9 PM", orders: 28 },
];

export default function ManagerDashboard() {
  const todayStats = {
    revenue: 4850.0,
    customers: 142,
    occupancy: 78,
    reservations: 18,
  };

  const inventoryAlerts = [
    { item: "Salmon", level: "Low", quantity: "3 kg" },
    { item: "Truffle Oil", level: "Critical", quantity: "0.5 L" },
    { item: "Parmesan", level: "Low", quantity: "2 kg" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <TrendingUp className="w-5 h-5 text-[#4CAF50]" />
          </div>
          <p className="text-sm text-muted-foreground">Revenue Today</p>
          <p className="text-2xl text-[#2D2D2D] mt-1">
            ${todayStats.revenue.toFixed(2)}
          </p>
          <p className="text-xs text-[#4CAF50] mt-2">+12% vs yesterday</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <TrendingUp className="w-5 h-5 text-[#4CAF50]" />
          </div>
          <p className="text-sm text-muted-foreground">Customers Today</p>
          <p className="text-2xl text-[#2D2D2D] mt-1">{todayStats.customers}</p>
          <p className="text-xs text-[#4CAF50] mt-2">+8% vs yesterday</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-[#FF6B35]" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Table Occupancy</p>
          <p className="text-2xl text-[#2D2D2D] mt-1">{todayStats.occupancy}%</p>
          <div className="mt-2 h-2 bg-background rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF6B35]"
              style={{ width: `${todayStats.occupancy}%` }}
            />
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#FF6B35]" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Active Reservations</p>
          <p className="text-2xl text-[#2D2D2D] mt-1">{todayStats.reservations}</p>
          <p className="text-xs text-muted-foreground mt-2">For today & tonight</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Trends */}
        <div className="bg-card rounded-xl p-6 shadow-md">
          <h3 className="text-[#2D2D2D] mb-4">Revenue Trends</h3>
          <ResponsiveContainer id="revenue-trends-container" width="100%" height={300}>
            <LineChart id="revenue-trends-chart" data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="day" stroke="#717171" />
              <YAxis stroke="#717171" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              />
              <Line
                key="line-revenue"
                type="monotone"
                dataKey="revenue"
                stroke="#FF6B35"
                strokeWidth={3}
                dot={{ fill: "#FF6B35", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Peak Hours */}
        <div className="bg-card rounded-xl p-6 shadow-md">
          <h3 className="text-[#2D2D2D] mb-4">Peak Hours</h3>
          <ResponsiveContainer id="peak-hours-container" width="100%" height={300}>
            <BarChart id="peak-hours-chart" data={peakHoursData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="hour" stroke="#717171" />
              <YAxis stroke="#717171" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              />
              <Bar key="bar-orders" dataKey="orders" fill="#FF6B35" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Inventory Alerts */}
      <div className="bg-card rounded-xl p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-[#FFC107]" />
          <h3 className="text-[#2D2D2D]">Inventory Alerts</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {inventoryAlerts.map((alert) => (
            <div
              key={`alert-${alert.item}`}
              className="p-4 bg-background rounded-lg border-l-4 border-[#FFC107]"
            >
              <div className="flex items-center justify-between mb-2">
                <p>{alert.item}</p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    alert.level === "Critical"
                      ? "bg-[#F44336] text-white"
                      : "bg-[#FFC107] text-white"
                  }`}
                >
                  {alert.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Remaining: {alert.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}