import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { MockDataService, TableItem } from '../../services/mock-data.service'

@Component({
  selector: 'staff-tables',
  templateUrl: 'staff-tables.component.html',
  styleUrls: ['staff-tables.component.css'],
})
export class StaffTables implements OnInit {
  tables: TableItem[] = []

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private mockData: MockDataService
  ) {
    this.title.setTitle('Staff POS - Tables')
    this.meta.addTags([
      { property: 'og:title', content: 'Staff POS - Tables' },
    ])
  }

  ngOnInit(): void {
    this.tables = this.mockData.getTables()
  }

  selectTable(table: TableItem): void {
    this.router.navigate(['/staff-table-details', table.id])
  }

  getTableClass(table: TableItem): string {
    switch (table.status) {
      case 'occupied': return 'staff-tables-thq-button-elm14'
      case 'reserved': return 'staff-tables-thq-button-elm16'
      default: return 'staff-tables-thq-button-elm12'
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'occupied': return '#ef4444'
      case 'reserved': return '#f59e0b'
      default: return '#22c55e'
    }
  }

  navigateTo(path: string): void {
    this.router.navigate([path])
  }

  logout(): void {
    this.mockData.logout()
    this.router.navigate(['/'])
  }
}
