import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Table, MenuItem, Order, OrderItem } from '../../models';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  tables: Table[] = [];
  menuItems: MenuItem[] = [];
  selectedTable: Table | null = null;
  currentOrder: OrderItem[] = [];
  selectedCategory = 'All';
  searchTerm = '';
  showTableDetail = false;
  currentView: 'tables' | 'reservations' = 'tables';

  categories: string[] = ['All', 'Appetizer', 'Main Course', 'Beverage', 'Dessert'];

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.tables$.subscribe(tables => {
      this.tables = tables;
    });

    this.dataService.menuItems$.subscribe(items => {
      this.menuItems = items;
    });
  }

  selectTable(table: Table): void {
    this.selectedTable = table;
    // Check if table has existing order
    const existingOrder = this.dataService.getOrders().find(
      o => o.tableId === table.id && o.status !== 'paid'
    );
    
    if (existingOrder) {
      this.currentOrder = [...existingOrder.items];
    } else {
      this.currentOrder = [];
    }
    
    this.showTableDetail = true;
  }

  getFilteredMenuItems(): MenuItem[] {
    let filtered = this.menuItems;

    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    return filtered;
  }

  addToOrder(menuItem: MenuItem): void {
    const existingItem = this.currentOrder.find(item => item.menuItem.id === menuItem.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
      this.currentOrder = [...this.currentOrder];
    } else {
      const orderItem: OrderItem = {
        id: `order-item-${Date.now()}`,
        menuItem,
        quantity: 1
      };
      this.currentOrder = [...this.currentOrder, orderItem];
    }
  }

  removeFromOrder(orderItem: OrderItem): void {
    this.currentOrder = this.currentOrder.filter(item => item.id !== orderItem.id);
  }

  updateQuantity(orderItem: OrderItem, delta: number): void {
    const newQuantity = orderItem.quantity + delta;
    if (newQuantity > 0) {
      orderItem.quantity = newQuantity;
      this.currentOrder = [...this.currentOrder];
    } else {
      this.removeFromOrder(orderItem);
    }
  }

  getOrderTotal(): number {
    return this.currentOrder.reduce((total, item) => {
      return total + (item.menuItem.price * item.quantity);
    }, 0);
  }

  submitOrder(): void {
    if (!this.selectedTable || this.currentOrder.length === 0) {
      return;
    }

    const user = this.authService.getCurrentUser();
    const subtotal = this.getOrderTotal();
    const tax = subtotal * 0.1; // 10% VAT
    const total = subtotal + tax;

    const order: Order = {
      id: `order-${Date.now()}`,
      tableId: this.selectedTable.id,
      items: this.currentOrder,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      total,
      subtotal,
      tax,
      staffId: user?.id || 'unknown',
      paymentStatus: 'unpaid'
    };

    this.dataService.createOrder(order);
    this.dataService.updateTable({
      ...this.selectedTable,
      status: 'occupied'
    });

    // Chuyển về view tables
    this.showTableDetail = false;
    this.currentOrder = [];
    this.selectedTable = null;
    
    alert('Đã gửi order đến bếp!');
  }

  proceedToCheckout(): void {
    if (!this.selectedTable) return;
    
    // Tìm order của bàn này
    const order = this.dataService.getOrders().find(
      o => o.tableId === this.selectedTable!.id && o.status !== 'paid'
    );
    
    if (order) {
      this.router.navigate(['/staff/checkout', order.id]);
    } else {
      alert('Không tìm thấy order cho bàn này');
    }
  }

  viewReservations(): void {
    this.router.navigate(['/staff/reservations']);
  }

  mergeTables(): void {
    // In a real app, this would show a dialog to select tables to merge
    alert('Table merging feature - Select multiple tables to merge for large groups');
  }

  logout(): void {
    this.authService.logout();
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }
}