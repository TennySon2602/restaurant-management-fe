import { TrendingUp, Download, Calendar } from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const salesData = [
  { month: "Jan", revenue: 42000, orders: 420 },
  { month: "Feb", revenue: 48000, orders: 480 },
  { month: "Mar", revenue: 52000, orders: 510 },
];

const bestSellingDishes = [
  { name: "Truffle Pasta", sales: 245, revenue: 6860 },
  { name: "Wagyu Steak", sales: 189, revenue: 12285 },
  { name: "Grilled Salmon", sales: 167, revenue: 5845 },
  { name: "Chocolate Lava", sales: 156, revenue: 1872 },
  { name: "Lobster Bisque", sales: 134, revenue: 2412 },
];

const categoryData = [
  { name: "Mains", value: 45 },
  { name: "Appetizers", value: 25 },
  { name: "Desserts", value: 20 },
  { name: "Drinks", value: 10 },
];

const COLORS = ["#FF6B35", "#FFB347", "#4ECDC4", "#95E1D3"];

export default function ManagerReports() {
  const kpis = [
    { label: "Total Revenue (Q1)", value: "$142,000", change: "+15%" },
    { label: "Avg Order Value", value: "$74.50", change: "+8%" },
    { label: "Total Orders", value: "1,410", change: "+12%" },
    { label: "Customer Satisfaction", value: "4.8/5", change: "+0.2" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#2D2D2D]">Reports & Analytics</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Analyze restaurant performance
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-background hover:bg-accent rounded-lg flex items-center gap-2 transition-colors">
            <Calendar className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-sm">This Quarter</span>
          </button>
          <button className="px-4 py-2 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-lg flex items-center gap-2 transition-colors">
            <Download className="w-5 h-5" />
            <span className="text-sm">Export</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={`kpi-${kpi.label}`} className="bg-card rounded-xl p-6 shadow-md">
            <p className="text-sm text-muted-foreground mb-2">{kpi.label}</p>
            <p className="text-2xl text-[#2D2D2D] mb-2">{kpi.value}</p>
            <div className="flex items-center gap-1 text-[#4CAF50]">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">{kpi.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-card rounded-xl p-6 shadow-md">
          <h3 className="text-[#2D2D2D] mb-4">Monthly Revenue & Orders</h3>
          <ResponsiveContainer id="revenue-orders-container" width="100%" height={300}>
            <BarChart id="revenue-orders-chart" data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#717171" />
              <YAxis stroke="#717171" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar key="bar-revenue" dataKey="revenue" fill="#FF6B35" radius={[8, 8, 0, 0]} />
              <Bar key="bar-orders" dataKey="orders" fill="#FFB347" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-card rounded-xl p-6 shadow-md">
          <h3 className="text-[#2D2D2D] mb-4">Sales by Category</h3>
          <ResponsiveContainer id="category-distribution-container" width="100%" height={300}>
            <PieChart id="category-distribution-chart">
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`pie-cell-${entry.name}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Best Selling Dishes */}
      <div className="bg-card rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-[#2D2D2D]">Best-Selling Dishes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="text-left p-4 text-sm text-muted-foreground">Rank</th>
                <th className="text-left p-4 text-sm text-muted-foreground">Dish</th>
                <th className="text-left p-4 text-sm text-muted-foreground">Sales</th>
                <th className="text-left p-4 text-sm text-muted-foreground">Revenue</th>
                <th className="text-left p-4 text-sm text-muted-foreground">
                  Contribution
                </th>
              </tr>
            </thead>
            <tbody>
              {bestSellingDishes.map((dish, index) => {
                const totalRevenue = bestSellingDishes.reduce(
                  (sum, d) => sum + d.revenue,
                  0
                );
                const contribution = (dish.revenue / totalRevenue) * 100;
                return (
                  <tr key={`dish-${dish.name}`} className="border-b border-border last:border-0">
                    <td className="p-4">
                      <div className="w-8 h-8 bg-[#FFF5F2] rounded-full flex items-center justify-center">
                        <span className="text-sm text-[#FF6B35]">#{index + 1}</span>
                      </div>
                    </td>
                    <td className="p-4">{dish.name}</td>
                    <td className="p-4">{dish.sales} orders</td>
                    <td className="p-4 text-[#FF6B35]">${dish.revenue}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-background rounded-full overflow-hidden max-w-[100px]">
                          <div
                            className="h-full bg-[#FF6B35]"
                            style={{ width: `${contribution}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {contribution.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="grid md:grid-cols-2 gap-4">
        <button className="p-6 bg-card hover:bg-accent rounded-xl shadow-md transition-colors text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <Download className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p>Export as Excel</p>
              <p className="text-sm text-muted-foreground">
                Download full report (.xlsx)
              </p>
            </div>
          </div>
        </button>

        <button className="p-6 bg-card hover:bg-accent rounded-xl shadow-md transition-colors text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <Download className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p>Export as PDF</p>
              <p className="text-sm text-muted-foreground">
                Download printable report (.pdf)
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
