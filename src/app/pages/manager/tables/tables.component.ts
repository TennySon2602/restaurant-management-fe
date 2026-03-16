import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { Table } from '../../../models';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tables-management">
      <h1>Table Management</h1>
      <div class="tables-grid">
        <div *ngFor="let table of tables" class="table-card card"
             [class.occupied]="table.status === 'occupied'"
             [class.reserved]="table.status === 'reserved'">
          <h2>Table {{ table.number }}</h2>
          <p>Capacity: {{ table.capacity }} seats</p>
          <p>Status: {{ table.status }}</p>
          <button class="btn-secondary">Manage</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tables-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .table-card { text-align: center; }
    .table-card.occupied { border-left: 4px solid #f59e0b; }
    .table-card.reserved { border-left: 4px solid #3b82f6; }
  `]
})
export class TablesComponent implements OnInit {
  tables: Table[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.tables$.subscribe(tables => {
      this.tables = tables;
    });
  }
}
