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
  childrenCount = 0; // Trẻ em không cần ghế (dưới 5 tuổi)
  childrenWithSeatCount = 0; // Trẻ em cần ghế riêng (từ 5-12 tuổi)
  notes = '';
  
  showSuccess = false;
  errorMessage = '';
  
  // History
  myReservations: Reservation[] = [];
  showHistory = false;
  searchPhone = '';

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
    
    // Subscribe to reservations for history
    this.dataService.reservations$.subscribe(reservations => {
      this.updateMyReservations(reservations);
    });
  }
  
  // History methods
  toggleHistory(): void {
    this.showHistory = !this.showHistory;
  }
  
  searchHistory(): void {
    if (!this.searchPhone || this.searchPhone.trim().length < 10) {
      this.errorMessage = 'Vui lòng nhập số điện thoại hợp lệ (10 số)';
      return;
    }
    
    this.dataService.reservations$.subscribe(reservations => {
      this.myReservations = reservations.filter(
        r => r.customerPhone === this.searchPhone.trim()
      ).sort((a, b) => {
        // Sort by date desc, then time desc
        if (a.date !== b.date) {
          return b.date.localeCompare(a.date);
        }
        return b.time.localeCompare(a.time);
      });
    });
  }
  
  updateMyReservations(allReservations: Reservation[]): void {
    if (this.customerPhone) {
      this.myReservations = allReservations.filter(
        r => r.customerPhone === this.customerPhone
      ).sort((a, b) => {
        if (a.date !== b.date) {
          return b.date.localeCompare(a.date);
        }
        return b.time.localeCompare(a.time);
      });
    }
  }
  
  cancelReservation(reservation: Reservation): void {
    if (reservation.status === 'pending' || reservation.status === 'confirmed') {
      if (confirm(`Bạn có chắc muốn hủy đặt bàn vào ${reservation.date} lúc ${reservation.time}?`)) {
        this.dataService.updateReservation({
          ...reservation,
          status: 'cancelled'
        });
        
        // Free up tables
        reservation.tableIds.forEach(tableId => {
          const table = this.tables.find(t => t.id === tableId);
          if (table && table.status === 'reserved') {
            this.dataService.updateTable({
              ...table,
              status: 'available'
            });
          }
        });
      }
    }
  }
  
  getStatusText(status: string): string {
    const statusMap: {[key: string]: string} = {
      'pending': 'Pending',
      'confirmed': 'Confirmed',
      'seated': 'Seated',
      'completed': 'Completed',
      'cancelled': 'Cancelled'
    };
    return statusMap[status] || status;
  }
  
  getStatusClass(status: string): string {
    return `status-${status}`;
  }
  
  canCancel(reservation: Reservation): boolean {
    return reservation.status === 'pending' || reservation.status === 'confirmed';
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

  getTotalGuests(): number {
    return this.guestCount + this.childrenCount + this.childrenWithSeatCount;
  }

  // Tổng số người cần ghế (để tính capacity)
  getTotalSeatsNeeded(): number {
    return this.guestCount + this.childrenWithSeatCount;
  }

  submitReservation(): void {
    this.errorMessage = '';

    // Validation
    if (!this.customerName || !this.customerPhone) {
      this.errorMessage = 'Vui lòng nhập tên và số điện thoại';
      return;
    }

    if (this.selectedTableIds.length === 0) {
      this.errorMessage = 'Vui lòng chọn ít nhất một bàn';
      return;
    }

    if (!this.date || !this.time) {
      this.errorMessage = 'Vui lòng chọn ngày và giờ';
      return;
    }

    const totalCapacity = this.getTotalCapacity();
    const seatsNeeded = this.getTotalSeatsNeeded();
    if (seatsNeeded > totalCapacity) {
      this.errorMessage = `Số ghế cần: ${seatsNeeded}, bàn đã chọn chỉ có ${totalCapacity} ghế`;
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
      childrenCount: this.childrenCount,
      childrenWithSeatCount: this.childrenWithSeatCount,
      tableIds: this.selectedTableIds,
      status: 'pending',
      notes: this.notes,
      hasPreOrder: false
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
    this.childrenCount = 0;
    this.childrenWithSeatCount = 0;
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
    const seatsNeeded = this.getTotalSeatsNeeded();
    if (seatsNeeded <= 2) return 'Gợi ý: Chọn bàn 2 chỗ';
    if (seatsNeeded <= 4) return 'Gợi ý: Chọn bàn 4 chỗ';
    if (seatsNeeded <= 6) return 'Gợi ý: Chọn bàn 6 chỗ';
    
    const sixSeaters = Math.floor(seatsNeeded / 6);
    const remainder = seatsNeeded % 6;
    let suggestion = `Gợi ý: Chọn ${sixSeaters} bàn 6 chỗ`;
    if (remainder > 0) {
      if (remainder <= 2) suggestion += ' + 1 bàn 2 chỗ';
      else if (remainder <= 4) suggestion += ' + 1 bàn 4 chỗ';
      else suggestion += ' + 1 bàn 6 chỗ';
    }
    return suggestion;
  }
}