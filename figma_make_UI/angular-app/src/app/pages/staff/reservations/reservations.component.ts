import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Reservation } from '../../../models';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[] = [];
  todayReservations: Reservation[] = [];
  upcomingReservations: Reservation[] = [];
  selectedDate: string = '';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.selectedDate = today;
    this.loadReservations();
  }

  loadReservations(): void {
    this.dataService.reservations$.subscribe(reservations => {
      this.reservations = reservations;
      this.filterReservations();
    });
  }

  filterReservations(): void {
    const today = new Date().toISOString().split('T')[0];
    
    this.todayReservations = this.reservations
      .filter(r => r.date === today && r.status !== 'cancelled')
      .sort((a, b) => a.time.localeCompare(b.time));
    
    this.upcomingReservations = this.reservations
      .filter(r => r.date > today && r.status !== 'cancelled')
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  }

  confirmReservation(reservation: Reservation): void {
    const updated = { ...reservation, status: 'confirmed' as const };
    this.dataService.updateReservation(updated);
  }

  seatCustomers(reservation: Reservation): void {
    const updated = { 
      ...reservation, 
      status: 'seated' as const,
      arrivalTime: new Date().toTimeString().slice(0, 5)
    };
    this.dataService.updateReservation(updated);
    
    // Cập nhật trạng thái bàn
    reservation.tableIds.forEach(tableId => {
      const table = this.dataService.getTables().find(t => t.id === tableId);
      if (table) {
        this.dataService.updateTable({ ...table, status: 'occupied' });
      }
    });

    // Nếu có pre-order, tạo order ngay
    if (reservation.hasPreOrder && reservation.preOrderItems) {
      this.createOrderFromPreOrder(reservation);
    }
  }

  createOrderFromPreOrder(reservation: Reservation): void {
    if (!reservation.preOrderItems) return;

    const subtotal = reservation.preOrderItems.reduce((sum, item) => 
      sum + (item.menuItem.price * item.quantity), 0
    );
    const tax = subtotal * 0.1; // 10% VAT
    const total = subtotal + tax;

    const order = {
      id: `order-${Date.now()}`,
      tableId: reservation.tableIds[0],
      reservationId: reservation.id,
      items: reservation.preOrderItems,
      status: 'pending' as const,
      createdAt: new Date(),
      updatedAt: new Date(),
      total,
      subtotal,
      tax,
      staffId: 'current-staff',
      paymentStatus: 'unpaid' as const
    };

    this.dataService.createOrder(order);
  }

  cancelReservation(reservation: Reservation): void {
    if (confirm(`Hủy đặt bàn cho ${reservation.customerName}?`)) {
      const updated = { ...reservation, status: 'cancelled' as const };
      this.dataService.updateReservation(updated);
      
      // Giải phóng bàn
      reservation.tableIds.forEach(tableId => {
        const table = this.dataService.getTables().find(t => t.id === tableId);
        if (table) {
          this.dataService.updateTable({ ...table, status: 'available' });
        }
      });
    }
  }

  getStatusBadgeClass(status: string): string {
    const classes: Record<string, string> = {
      'pending': 'badge-pending',
      'confirmed': 'badge-confirmed',
      'seated': 'badge-seated',
      'completed': 'badge-completed',
      'cancelled': 'badge-cancelled'
    };
    return classes[status] || '';
  }

  getStatusText(status: string): string {
    const texts: Record<string, string> = {
      'pending': 'Chờ xác nhận',
      'confirmed': 'Đã xác nhận',
      'seated': 'Đã đến',
      'completed': 'Hoàn thành',
      'cancelled': 'Đã hủy'
    };
    return texts[status] || status;
  }

  getTotalGuests(reservation: Reservation): number {
    return reservation.guestCount + 
           (reservation.childrenCount || 0) + 
           (reservation.childrenWithSeatCount || 0);
  }

  getTotalSeatsNeeded(reservation: Reservation): number {
    return reservation.guestCount + (reservation.childrenWithSeatCount || 0);
  }

  isReservationSoon(reservation: Reservation): boolean {
    const now = new Date();
    const resTime = new Date(`${reservation.date}T${reservation.time}`);
    const diffMinutes = (resTime.getTime() - now.getTime()) / (1000 * 60);
    return diffMinutes <= 30 && diffMinutes >= 0;
  }

  formatTableNumbers(tableIds: string[]): string {
    const tables = this.dataService.getTables();
    const numbers = tableIds.map(id => {
      const table = tables.find(t => t.id === id);
      return table?.number || '?';
    });
    return numbers.join(', ');
  }
}