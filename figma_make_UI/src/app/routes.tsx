import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import AuthHome from "./components/AuthHome";

// Customer pages
import CustomerLayout from "./components/customer/CustomerLayout";
import CustomerHome from "./components/customer/CustomerHome";
import CustomerMenu from "./components/customer/CustomerMenu";
import CustomerReservations from "./components/customer/CustomerReservations";
import CustomerProfile from "./components/customer/CustomerProfile";

// Staff pages
import StaffLayout from "./components/staff/StaffLayout";
import StaffTables from "./components/staff/StaffTables";
import StaffOrders from "./components/staff/StaffOrders";
import StaffPayments from "./components/staff/StaffPayments";
import StaffShift from "./components/staff/StaffShift";

// Manager pages
import ManagerLayout from "./components/manager/ManagerLayout";
import ManagerDashboard from "./components/manager/ManagerDashboard";
import ManagerMenu from "./components/manager/ManagerMenu";
import ManagerInventory from "./components/manager/ManagerInventory";
import ManagerReports from "./components/manager/ManagerReports";
import ManagerTables from "./components/manager/ManagerTables";
import ManagerDiscounts from "./components/manager/ManagerDiscounts";
import ManagerEmployees from "./components/manager/ManagerEmployees";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: AuthHome },
      {
        path: "customer",
        Component: CustomerLayout,
        children: [
          { index: true, Component: CustomerHome },
          { path: "menu", Component: CustomerMenu },
          { path: "reservations", Component: CustomerReservations },
          { path: "profile", Component: CustomerProfile },
        ],
      },
      {
        path: "staff",
        Component: StaffLayout,
        children: [
          { index: true, Component: StaffTables },
          { path: "orders", Component: StaffOrders },
          { path: "payments", Component: StaffPayments },
          { path: "shift", Component: StaffShift },
        ],
      },
      {
        path: "manager",
        Component: ManagerLayout,
        children: [
          { index: true, Component: ManagerDashboard },
          { path: "menu", Component: ManagerMenu },
          { path: "inventory", Component: ManagerInventory },
          { path: "reports", Component: ManagerReports },
          { path: "tables", Component: ManagerTables },
          { path: "discounts", Component: ManagerDiscounts },
          { path: "employees", Component: ManagerEmployees },
        ],
      },
    ],
  },
]);