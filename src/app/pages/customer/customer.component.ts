import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Table, Reservation } from '../../models';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  tables: Table[] = [];
  selectedTableIds: string[] = [];
  
  // Form data
  customerName = '';
  customerPhone = '';
  date = '';
  time = '';
  guestCount = 2;
  notes = '';
  
  showSuccess = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.tables$.subscribe(tables => {
      this.tables = tables.filter(t => t.status === 'available');
    });

    // Set minimum date to today
    const today = new Date();
    this.date = today.toISOString().split('T')[0];
  }

  toggleTableSelection(tableId: string): void {
    const index = this.selectedTableIds.indexOf(tableId);
    if (index > -1) {
      this.selectedTableIds = this.selectedTableIds.filter(id => id !== tableId);
    } else {
      this.selectedTableIds = [...this.selectedTableIds, tableId];
    }
  }

  isTableSelected(tableId: string): boolean {
    return this.selectedTableIds.includes(tableId);
  }

  getTotalCapacity(): number {
    return this.selectedTableIds.reduce((total, id) => {
      const table = this.tables.find(t => t.id === id);
      return total + (table?.capacity || 0);
    }, 0);
  }

  submitReservation(): void {
    this.errorMessage = '';

    // Validation
    if (!this.customerName || !this.customerPhone) {
      this.errorMessage = 'Please provide your name and phone number';
      return;
    }

    if (this.selectedTableIds.length === 0) {
      this.errorMessage = 'Please select at least one table';
      return;
    }

    if (!this.date || !this.time) {
      this.errorMessage = 'Please select date and time';
      return;
    }

    const totalCapacity = this.getTotalCapacity();
    if (this.guestCount > totalCapacity) {
      this.errorMessage = `Selected tables can only accommodate ${totalCapacity} guests`;
      return;
    }

    // Create reservation
    const reservation: Reservation = {
      id: `res-${Date.now()}`,
      customerName: this.customerName,
      customerPhone: this.customerPhone,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      tableIds: this.selectedTableIds,
      status: 'pending',
      notes: this.notes
    };

    this.dataService.createReservation(reservation);

    // Update table statuses
    this.selectedTableIds.forEach(tableId => {
      const table = this.tables.find(t => t.id === tableId);
      if (table) {
        this.dataService.updateTable({
          ...table,
          status: 'reserved'
        });
      }
    });

    // Show success message
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
      this.resetForm();
    }, 3000);
  }

  resetForm(): void {
    this.selectedTableIds = [];
    this.customerName = '';
    this.customerPhone = '';
    this.guestCount = 2;
    this.notes = '';
    const today = new Date();
    this.date = today.toISOString().split('T')[0];
    this.time = '';
  }

  logout(): void {
    this.authService.logout();
  }

  getTablesByCapacity(capacity: number): Table[] {
    return this.tables.filter(t => t.capacity === capacity);
  }

  needsMultipleTables(): boolean {
    return this.guestCount > 6;
  }

  getSuggestedTables(): string {
    if (this.guestCount <= 2) return 'Select a 2-seat table';
    if (this.guestCount <= 4) return 'Select a 4-seat table';
    if (this.guestCount <= 6) return 'Select a 6-seat table';
    
    const sixSeaters = Math.floor(this.guestCount / 6);
    const remainder = this.guestCount % 6;
    let suggestion = `Select ${sixSeaters} x 6-seat tables`;
    if (remainder > 0) {
      if (remainder <= 2) suggestion += ' + 1 x 2-seat table';
      else if (remainder <= 4) suggestion += ' + 1 x 4-seat table';
      else suggestion += ' + 1 x 6-seat table';
    }
    return suggestion;
  }
}
