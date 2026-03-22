import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { AuthService } from '../../../services/auth.service';
import { Order, PaymentDetail, Invoice } from '../../../models';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: Order | null = null;
  tableNumber: number = 0;
  
  // Payment
  paymentMethod: 'cash' | 'card' | 'transfer' | 'mixed' = 'cash';
  payments: PaymentDetail[] = [];
  
  // Cash payment
  cashReceived: number = 0;
  
  // Card/Transfer
  cardAmount: number = 0;
  cardReference: string = '';
  transferAmount: number = 0;
  transferReference: string = '';
  
  // Discount
  discountCode: string = '';
  appliedDiscount: number = 0;
  
  showInvoice: boolean = false;
  generatedInvoice: Invoice | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('orderId');
    if (orderId) {
      this.loadOrder(orderId);
    }
  }

  loadOrder(orderId: string): void {
    this.dataService.orders$.subscribe(orders => {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        this.order = order;
        const tables = this.dataService.getTables();
        const table = tables.find(t => t.id === order.tableId);
        this.tableNumber = table?.number || 0;
      }
    });
  }

  get subtotal(): number {
    return this.order?.subtotal || 0;
  }

  get tax(): number {
    return this.order?.tax || 0;
  }

  get discount(): number {
    return this.appliedDiscount;
  }

  get totalAfterDiscount(): number {
    return this.subtotal + this.tax - this.discount;
  }

  get remainingAmount(): number {
    const paid = this.payments.reduce((sum, p) => sum + p.amount, 0);
    return this.totalAfterDiscount - paid;
  }

  get changeAmount(): number {
    if (this.paymentMethod === 'cash') {
      return Math.max(0, this.cashReceived - this.totalAfterDiscount);
    }
    return 0;
  }

  applyDiscount(): void {
    const discounts = this.dataService.getDiscounts();
    const discount = discounts.find(d => 
      d.code.toLowerCase() === this.discountCode.toLowerCase() && 
      d.active
    );

    if (discount) {
      if (discount.minOrder && this.subtotal < discount.minOrder) {
        alert(`Đơn hàng tối thiểu ${this.formatCurrency(discount.minOrder)} để áp dụng mã này`);
        return;
      }

      if (discount.type === 'percentage') {
        this.appliedDiscount = this.subtotal * (discount.value / 100);
      } else {
        this.appliedDiscount = discount.value;
      }
      
      alert(`Áp dụng thành công! Giảm ${this.formatCurrency(this.appliedDiscount)}`);
    } else {
      alert('Mã giảm giá không hợp lệ');
    }
  }

  addPayment(): void {
    let payment: PaymentDetail | null = null;

    if (this.paymentMethod === 'cash') {
      if (this.cashReceived < this.remainingAmount) {
        alert('Số tiền nhận chưa đủ');
        return;
      }
      payment = {
        id: `payment-${Date.now()}`,
        method: 'cash',
        amount: this.remainingAmount,
        timestamp: new Date()
      };
    } else if (this.paymentMethod === 'card') {
      if (!this.cardReference) {
        alert('Vui lòng nhập mã giao dịch thẻ');
        return;
      }
      payment = {
        id: `payment-${Date.now()}`,
        method: 'card',
        amount: this.cardAmount || this.remainingAmount,
        timestamp: new Date(),
        reference: this.cardReference
      };
    } else if (this.paymentMethod === 'transfer') {
      if (!this.transferReference) {
        alert('Vui lòng nhập mã giao dịch chuyển khoản');
        return;
      }
      payment = {
        id: `payment-${Date.now()}`,
        method: 'transfer',
        amount: this.transferAmount || this.remainingAmount,
        timestamp: new Date(),
        reference: this.transferReference
      };
    }

    if (payment) {
      this.payments.push(payment);
      
      // Reset form
      this.cashReceived = 0;
      this.cardAmount = 0;
      this.cardReference = '';
      this.transferAmount = 0;
      this.transferReference = '';
    }
  }

  removePayment(payment: PaymentDetail): void {
    this.payments = this.payments.filter(p => p.id !== payment.id);
  }

  completeCheckout(): void {
    if (this.remainingAmount > 0) {
      alert('Chưa thanh toán đủ số tiền');
      return;
    }

    if (!this.order) return;

    // Determine payment method
    let finalPaymentMethod: Order['paymentMethod'] = 'cash';
    if (this.payments.length > 1) {
      finalPaymentMethod = 'mixed';
    } else if (this.payments.length === 1) {
      finalPaymentMethod = this.payments[0].method;
    }

    // Update order
    const updatedOrder: Order = {
      ...this.order,
      status: 'paid',
      paymentStatus: 'paid',
      paymentMethod: finalPaymentMethod,
      paymentDetails: this.payments,
      discount: this.discount,
      total: this.totalAfterDiscount,
      updatedAt: new Date()
    };

    this.dataService.updateOrder(updatedOrder);

    // Generate invoice
    this.generateInvoice(updatedOrder);

    // Free table
    const table = this.dataService.getTables().find(t => t.id === this.order!.tableId);
    if (table) {
      this.dataService.updateTable({ ...table, status: 'available' });
    }

    this.showInvoice = true;
  }

  generateInvoice(order: Order): void {
    const user = this.authService.getCurrentUser();
    
    this.generatedInvoice = {
      id: `invoice-${Date.now()}`,
      orderId: order.id,
      tableNumber: this.tableNumber,
      items: order.items,
      subtotal: order.subtotal,
      tax: order.tax,
      discount: this.discount,
      total: this.totalAfterDiscount,
      paymentMethod: this.getPaymentMethodText(order.paymentMethod || 'cash'),
      paymentDetails: this.payments,
      paidAt: new Date(),
      staffName: user?.name || 'Staff',
      customerName: undefined
    };
  }

  printInvoice(): void {
    window.print();
  }

  backToStaff(): void {
    this.router.navigate(['/staff']);
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString('vi-VN') + 'đ';
  }

  getPaymentMethodText(method: string): string {
    const methods: Record<string, string> = {
      'cash': 'Tiền mặt',
      'card': 'Thẻ',
      'transfer': 'Chuyển khoản',
      'mixed': 'Hỗn hợp'
    };
    return methods[method] || method;
  }

  getPaymentMethodIcon(method: string): string {
    const icons: Record<string, string> = {
      'cash': '💵',
      'card': '💳',
      'transfer': '🏦'
    };
    return icons[method] || '💰';
  }
}
