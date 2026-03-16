import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Table, MenuItem, Order, OrderItem } from '../../models';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    this.currentOrder = [];
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
    const order: Order = {
      id: `order-${Date.now()}`,
      tableId: this.selectedTable.id,
      items: this.currentOrder,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      total: this.getOrderTotal(),
      staffId: user?.id || 'unknown'
    };

    this.dataService.createOrder(order);
    this.dataService.updateTable({
      ...this.selectedTable,
      status: 'occupied'
    });

    // Reset
    this.currentOrder = [];
    this.selectedTable = null;
    
    alert('Order submitted successfully!');
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
