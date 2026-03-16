import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inventory-management">
      <h1>Inventory Management</h1>
      <div class="inventory-list">
        <div *ngFor="let item of inventory" class="inventory-item card">
          <h3>{{ item.name }}</h3>
          <p>Category: {{ item.category }}</p>
          <p>Quantity: {{ item.quantity }} {{ item.unit }}</p>
          <p [class.low-stock]="item.quantity < item.minQuantity">
            Min: {{ item.minQuantity }} {{ item.unit }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .inventory-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .low-stock { color: #dc2626; font-weight: 700; }
  `]
})
export class InventoryComponent implements OnInit {
  inventory: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.inventory$.subscribe(items => {
      this.inventory = items;
    });
  }
}
