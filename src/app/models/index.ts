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
  reservationId?: string; // Link to reservation if applicable
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'served' | 'paid';
  createdAt: Date;
  updatedAt: Date;
  total: number;
  subtotal: number;
  tax: number;
  discount?: number;
  staffId: string;
  paymentStatus: 'unpaid' | 'paid' | 'partial';
  paymentMethod?: 'cash' | 'card' | 'transfer' | 'mixed';
  paymentDetails?: PaymentDetail[];
}

export interface PaymentDetail {
  id: string;
  method: 'cash' | 'card' | 'transfer';
  amount: number;
  timestamp: Date;
  reference?: string; // Mã giao dịch cho thẻ/chuyển khoản
}

export interface Invoice {
  id: string;
  orderId: string;
  tableNumber: number;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: string;
  paymentDetails: PaymentDetail[];
  paidAt: Date;
  staffName: string;
  customerName?: string;
}

export interface Reservation {
  id: string;
  customerName: string;
  customerPhone: string;
  date: string;
  time: string;
  guestCount: number;
  childrenCount?: number; // Trẻ em (không cần ghế riêng - ngồi cùng người lớn)
  childrenWithSeatCount?: number; // Trẻ em cần ghế riêng
  tableIds: string[];
  status: 'pending' | 'confirmed' | 'seated' | 'completed' | 'cancelled';
  notes?: string;
  hasPreOrder?: boolean; // Đã đặt món trước hay chưa
  preOrderItems?: OrderItem[]; // Món đã đặt trước
  arrivalTime?: string; // Giờ khách thực tế đến
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