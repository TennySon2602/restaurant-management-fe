export interface User {
  id: string;
  username: string;
  role: 'customer' | 'staff' | 'manager';
  name?: string;
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: 'available' | 'occupied' | 'reserved';
  mergedWith?: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
  available: boolean;
}

export interface OrderItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string;
  tableId: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'served' | 'paid';
  createdAt: Date;
  updatedAt: Date;
  total: number;
  staffId: string;
}

export interface Reservation {
  id: string;
  customerName: string;
  customerPhone: string;
  date: string;
  time: string;
  guestCount: number;
  tableIds: string[];
  status: 'pending' | 'confirmed' | 'seated' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Discount {
  id: string;
  code: string;
  description: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrder?: number;
  validFrom: Date;
  validTo: Date;
  active: boolean;
}

export interface Employee {
  id: string;
  name: string;
  role: 'staff' | 'manager';
  username: string;
  phone: string;
  email: string;
  hireDate: Date;
  active: boolean;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minQuantity: number;
  lastRestocked: Date;
}

export interface Analytics {
  totalRevenue: number;
  ordersToday: number;
  averageOrderValue: number;
  popularItems: {
    item: string;
    orders: number;
  }[];
  revenueByDay: {
    date: string;
    revenue: number;
  }[];
  ordersByHour: {
    hour: number;
    orders: number;
  }[];
}
