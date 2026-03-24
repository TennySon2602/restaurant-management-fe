import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { MenuItem } from '../../../models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="menu-management">
      <h1>Menu Management</h1>
      
      <div class="actions">
        <button (click)="showAddForm = true" class="btn-primary">+ Add New Item</button>
      </div>

      <div class="menu-grid">
        <div *ngFor="let item of menuItems" class="menu-item-card card">
          <h3>{{ item.name }}</h3>
          <p class="category">{{ item.category }}</p>
          <p class="description">{{ item.description }}</p>
          <p class="price">{{ formatPrice(item.price) }}</p>
          <div class="item-actions">
            <button class="btn-secondary">Edit</button>
            <button class="btn-secondary">Delete</button>
            <button class="btn-secondary">
              {{ item.available ? 'Disable' : 'Enable' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu-management { max-width: 1400px; }
    .actions { margin: 1.5rem 0; }
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .menu-item-card h3 { margin: 0 0 0.5rem 0; }
    .category { color: #666; font-size: 0.875rem; margin: 0 0 0.5rem 0; }
    .description { color: #999; font-size: 0.875rem; margin: 0 0 1rem 0; }
    .price { font-size: 1.5rem; font-weight: 900; color: var(--color-primary); margin: 0 0 1rem 0; }
    .item-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .item-actions button { flex: 1; min-width: 80px; }
  `]
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  showAddForm = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.menuItems$.subscribe(items => {
      this.menuItems = items;
    });
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }
}
