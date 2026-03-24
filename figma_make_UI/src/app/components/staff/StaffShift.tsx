import { useState } from "react";
import { Users, ClipboardList, DollarSign, Clock, LogOut } from "lucide-react";

export default function StaffShift() {
  const [shiftActive] = useState(true);

  const shiftData = {
    startTime: "9:00 AM",
    currentTime: "3:45 PM",
    duration: "6h 45m",
    tablesServed: 24,
    ordersProcessed: 38,
    revenueHandled: 2840.5,
  };

  const recentOrders = [
    { table: "T1", time: "3:30 PM", amount: 86.0, status: "Completed" },
    { table: "T4", time: "3:15 PM", amount: 124.0, status: "Completed" },
    { table: "T6", time: "2:45 PM", amount: 32.0, status: "Completed" },
    { table: "T9", time: "2:30 PM", amount: 156.0, status: "Completed" },
    { table: "T2", time: "2:00 PM", amount: 78.0, status: "Completed" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Shift Status */}
      <div className="bg-card rounded-xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[#2D2D2D]">Current Shift</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Started at {shiftData.startTime}
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-full ${
              shiftActive
                ? "bg-[#4CAF50] text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {shiftActive ? "Active" : "Ended"}
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-5 h-5" />
          <span>Duration: {shiftData.duration}</span>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tables Served</p>
              <p className="text-2xl text-[#2D2D2D]">{shiftData.tablesServed}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Orders Processed</p>
              <p className="text-2xl text-[#2D2D2D]">
                {shiftData.ordersProcessed}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Revenue Handled</p>
              <p className="text-2xl text-[#2D2D2D]">
                ${shiftData.revenueHandled.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-card rounded-xl p-6 shadow-md">
        <h3 className="text-[#2D2D2D] mb-4">Recent Orders</h3>
        <div className="space-y-3">
          {recentOrders.map((order, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-background rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#FFF5F2] rounded-full flex items-center justify-center">
                  <span className="text-sm text-[#FF6B35]">{order.table}</span>
                </div>
                <div>
                  <p className="text-sm">{order.time}</p>
                  <p className="text-xs text-muted-foreground">{order.status}</p>
                </div>
              </div>
              <div className="text-[#FF6B35]">${order.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shift Summary */}
      <div className="bg-card rounded-xl p-6 shadow-md">
        <h3 className="text-[#2D2D2D] mb-4">Shift Summary</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Average Order Value</span>
            <span>
              ${(shiftData.revenueHandled / shiftData.ordersProcessed).toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Average Service Time</span>
            <span>18 minutes</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-muted-foreground">Total Tips</span>
            <span className="text-[#4CAF50]">$284.00</span>
          </div>
        </div>

        <button
          className="w-full py-4 bg-[#2D2D2D] hover:bg-[#2D2D2D]/90 text-white rounded-xl flex items-center justify-center gap-2 transition-colors"
          onClick={() => {
            if (confirm("Are you sure you want to end your shift?")) {
              alert("Shift ended successfully!");
            }
          }}
        >
          <LogOut className="w-5 h-5" />
          End Shift
        </button>
      </div>
    </div>
  );
}
