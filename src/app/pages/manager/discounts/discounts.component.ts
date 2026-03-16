import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-discounts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="discounts-management">
      <h1>Discount Management</h1>
      <button class="btn-primary">+ Add Discount</button>
      <div class="discounts-list">
        <div *ngFor="let discount of discounts" class="discount-card card">
          <h3>{{ discount.code }}</h3>
          <p>{{ discount.description }}</p>
          <p class="discount-value">{{ discount.value }}{{ discount.type === 'percentage' ? '%' : 'đ' }} OFF</p>
          <p class="status" [class.active]="discount.active">{{ discount.active ? 'Active' : 'Inactive' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .discounts-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .discount-value { font-size: 1.5rem; font-weight: 900; color: var(--color-primary); }
    .status.active { color: #10b981; font-weight: 700; }
  `]
})
export class DiscountsComponent implements OnInit {
  discounts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.discounts$.subscribe(discounts => {
      this.discounts = discounts;
    });
  }
}
