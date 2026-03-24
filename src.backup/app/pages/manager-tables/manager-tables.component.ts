import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { MockDataService, TableItem } from '../../services/mock-data.service'

@Component({
  selector: 'manager-tables',
  templateUrl: 'manager-tables.component.html',
  styleUrls: ['manager-tables.component.css'],
})
export class ManagerTables implements OnInit {
  tables: TableItem[] = []
  showModal: boolean = false
  isEditing: boolean = false
  editForm: Partial<TableItem> = { id: '', seats: 2, location: 'Main Hall', status: 'available' }

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private mockData: MockDataService
  ) {
    this.title.setTitle('Table Management - Gastros')
    this.meta.addTags([
      { property: 'og:title', content: 'Table Management - Gastros' },
    ])
  }

  ngOnInit(): void {
    this.tables = this.mockData.getTables()
  }

  get totalTables(): number { return this.tables.length }
  get totalCapacity(): number { return this.tables.reduce((s, t) => s + t.seats, 0) }
  get mainHallCount(): number { return this.tables.filter(t => t.location === 'Main Hall').length }

  openAddModal(): void {
    this.isEditing = false
    const nextId = 'T' + (this.tables.length + 1)
    this.editForm = { id: nextId, seats: 2, location: 'Main Hall', status: 'available' }
    this.showModal = true
  }

  openEditModal(table: TableItem): void {
    this.isEditing = true
    this.editForm = { ...table }
    this.showModal = true
  }

  closeModal(): void {
    this.showModal = false
  }

  saveTable(): void {
    if (!this.editForm.id) return
    if (this.isEditing) {
      this.tables = this.mockData.updateTable(this.editForm as TableItem)
    } else {
      this.tables = this.mockData.addTable(this.editForm as TableItem)
    }
    this.showModal = false
  }

  deleteTable(table: TableItem): void {
    if (confirm('Delete table "' + table.id + '"?')) {
      this.tables = this.mockData.deleteTable(table.id)
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
