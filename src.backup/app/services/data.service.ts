import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Table,
  MenuItem,
  Order,
  Reservation,
  Discount,
  Employee,
  InventoryItem,
  Analytics
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Tables
  private tablesSubject = new BehaviorSubject<Table[]>(this.getMockTables());
  public tables$ = this.tablesSubject.asObservable();

  // Menu Items
  private menuItemsSubject = new BehaviorSubject<MenuItem[]>(this.getMockMenuItems());
  public menuItems$ = this.menuItemsSubject.asObservable();

  // Orders
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  public orders$ = this.ordersSubject.asObservable();

  // Reservations
  private reservationsSubject = new BehaviorSubject<Reservation[]>([]);
  public reservations$ = this.reservationsSubject.asObservable();

  // Discounts
  private discountsSubject = new BehaviorSubject<Discount[]>(this.getMockDiscounts());
  public discounts$ = this.discountsSubject.asObservable();

  // Employees
  private employeesSubject = new BehaviorSubject<Employee[]>(this.getMockEmployees());
  public employees$ = this.employeesSubject.asObservable();

  // Inventory
  private inventorySubject = new BehaviorSubject<InventoryItem[]>(this.getMockInventory());
  public inventory$ = this.inventorySubject.asObservable();

  constructor() {}

  // Tables
  getTables(): Table[] {
    return this.tablesSubject.value;
  }

  updateTable(table: Table): void {
    const tables = this.tablesSubject.value.map(t => 
      t.id === table.id ? table : t
    );
    this.tablesSubject.next(tables);
  }

  mergeTables(tableIds: string[]): void {
    const tables = this.tablesSubject.value.map(table => {
      if (tableIds.includes(table.id)) {
        return {
          ...table,
          status: 'occupied' as const,
          mergedWith: tableIds.filter(id => id !== table.id)
        };
      }
      return table;
    });
    this.tablesSubject.next(tables);
  }

  unmergeTables(tableIds: string[]): void {
    const tables = this.tablesSubject.value.map(table => {
      if (tableIds.includes(table.id)) {
        return {
          ...table,
          status: 'available' as const,
          mergedWith: undefined
        };
      }
      return table;
    });
    this.tablesSubject.next(tables);
  }

  // Menu Items
  getMenuItems(): MenuItem[] {
    return this.menuItemsSubject.value;
  }

  addMenuItem(item: MenuItem): void {
    const items = [...this.menuItemsSubject.value, item];
    this.menuItemsSubject.next(items);
  }

  updateMenuItem(item: MenuItem): void {
    const items = this.menuItemsSubject.value.map(i => 
      i.id === item.id ? item : i
    );
    this.menuItemsSubject.next(items);
  }

  deleteMenuItem(id: string): void {
    const items = this.menuItemsSubject.value.filter(i => i.id !== id);
    this.menuItemsSubject.next(items);
  }

  // Orders
  getOrders(): Order[] {
    return this.ordersSubject.value;
  }

  createOrder(order: Order): void {
    const orders = [...this.ordersSubject.value, order];
    this.ordersSubject.next(orders);
  }

  updateOrder(order: Order): void {
    const orders = this.ordersSubject.value.map(o => 
      o.id === order.id ? order : o
    );
    this.ordersSubject.next(orders);
  }

  // Reservations
  getReservations(): Reservation[] {
    return this.reservationsSubject.value;
  }

  createReservation(reservation: Reservation): void {
    const reservations = [...this.reservationsSubject.value, reservation];
    this.reservationsSubject.next(reservations);
  }

  updateReservation(reservation: Reservation): void {
    const reservations = this.reservationsSubject.value.map(r => 
      r.id === reservation.id ? reservation : r
    );
    this.reservationsSubject.next(reservations);
  }

  // Discounts
  getDiscounts(): Discount[] {
    return this.discountsSubject.value;
  }

  addDiscount(discount: Discount): void {
    const discounts = [...this.discountsSubject.value, discount];
    this.discountsSubject.next(discounts);
  }

  updateDiscount(discount: Discount): void {
    const discounts = this.discountsSubject.value.map(d => 
      d.id === discount.id ? discount : d
    );
    this.discountsSubject.next(discounts);
  }

  deleteDiscount(id: string): void {
    const discounts = this.discountsSubject.value.filter(d => d.id !== id);
    this.discountsSubject.next(discounts);
  }

  // Employees
  getEmployees(): Employee[] {
    return this.employeesSubject.value;
  }

  addEmployee(employee: Employee): void {
    const employees = [...this.employeesSubject.value, employee];
    this.employeesSubject.next(employees);
  }

  updateEmployee(employee: Employee): void {
    const employees = this.employeesSubject.value.map(e => 
      e.id === employee.id ? employee : e
    );
    this.employeesSubject.next(employees);
  }

  deleteEmployee(id: string): void {
    const employees = this.employeesSubject.value.filter(e => e.id !== id);
    this.employeesSubject.next(employees);
  }

  // Inventory
  getInventory(): InventoryItem[] {
    return this.inventorySubject.value;
  }

  updateInventoryItem(item: InventoryItem): void {
    const inventory = this.inventorySubject.value.map(i => 
      i.id === item.id ? item : i
    );
    this.inventorySubject.next(inventory);
  }

  // Analytics
  getAnalytics(): Analytics {
    const orders = this.ordersSubject.value;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const ordersToday = orders.length;
    const averageOrderValue = ordersToday > 0 ? totalRevenue / ordersToday : 0;

    return {
      totalRevenue,
      ordersToday,
      averageOrderValue,
      popularItems: this.getPopularItems(),
      revenueByDay: this.getRevenueByDay(),
      ordersByHour: this.getOrdersByHour()
    };
  }

  private getPopularItems(): { item: string; orders: number }[] {
    return [
      { item: 'Phở Bò', orders: 45 },
      { item: 'Bánh Mì', orders: 38 },
      { item: 'Bún Chả', orders: 32 },
      { item: 'Gỏi Cuốn', orders: 28 },
      { item: 'Cà Phê Sữa Đá', orders: 52 }
    ];
  }

  private getRevenueByDay(): { date: string; revenue: number }[] {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((date, i) => ({
      date,
      revenue: 15000 + Math.random() * 10000
    }));
  }

  private getOrdersByHour(): { hour: number; orders: number }[] {
    return Array.from({ length: 24 }, (_, hour) => ({
      hour,
      orders: hour >= 11 && hour <= 14 ? 15 + Math.random() * 10 :
              hour >= 18 && hour <= 21 ? 20 + Math.random() * 15 :
              Math.random() * 5
    }));
  }

  // Mock Data
  private getMockTables(): Table[] {
    return Array.from({ length: 20 }, (_, i) => ({
      id: `table-${i + 1}`,
      number: i + 1,
      capacity: i < 10 ? 2 : i < 15 ? 4 : 6,
      status: 'available' as const
    }));
  }

  private getMockMenuItems(): MenuItem[] {
    return [
      {
        id: 'item-1',
        name: 'Phở Bò',
        category: 'Main Course',
        price: 85000,
        description: 'Traditional Vietnamese beef noodle soup',
        available: true
      },
      {
        id: 'item-2',
        name: 'Bánh Mì',
        category: 'Appetizer',
        price: 35000,
        description: 'Vietnamese sandwich with pork and vegetables',
        available: true
      },
      {
        id: 'item-3',
        name: 'Bún Chả',
        category: 'Main Course',
        price: 75000,
        description: 'Grilled pork with vermicelli',
        available: true
      },
      {
        id: 'item-4',
        name: 'Gỏi Cuốn',
        category: 'Appetizer',
        price: 45000,
        description: 'Fresh spring rolls',
        available: true
      },
      {
        id: 'item-5',
        name: 'Cơm Tấm',
        category: 'Main Course',
        price: 65000,
        description: 'Broken rice with grilled pork',
        available: true
      },
      {
        id: 'item-6',
        name: 'Cà Phê Sữa Đá',
        category: 'Beverage',
        price: 25000,
        description: 'Vietnamese iced coffee with milk',
        available: true
      }
    ];
  }

  private getMockDiscounts(): Discount[] {
    return [
      {
        id: 'disc-1',
        code: 'WELCOME10',
        description: '10% off first order',
        type: 'percentage',
        value: 10,
        validFrom: new Date('2024-01-01'),
        validTo: new Date('2024-12-31'),
        active: true
      }
    ];
  }

  private getMockEmployees(): Employee[] {
    return [
      {
        id: 'emp-1',
        name: 'Nguyễn Văn A',
        role: 'staff',
        username: 'staff',
        phone: '0901234567',
        email: 'staff@restaurant.com',
        hireDate: new Date('2023-01-15'),
        active: true
      },
      {
        id: 'emp-2',
        name: 'Trần Thị B',
        role: 'manager',
        username: 'manager',
        phone: '0907654321',
        email: 'manager@restaurant.com',
        hireDate: new Date('2022-06-01'),
        active: true
      }
    ];
  }

  private getMockInventory(): InventoryItem[] {
    return [
      {
        id: 'inv-1',
        name: 'Rice',
        category: 'Grains',
        quantity: 150,
        unit: 'kg',
        minQuantity: 50,
        lastRestocked: new Date()
      },
      {
        id: 'inv-2',
        name: 'Beef',
        category: 'Meat',
        quantity: 45,
        unit: 'kg',
        minQuantity: 20,
        lastRestocked: new Date()
      }
    ];
  }
}
