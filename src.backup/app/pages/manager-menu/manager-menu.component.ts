import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { MockDataService, MenuItem } from '../../services/mock-data.service'

@Component({
  selector: 'manager-menu',
  templateUrl: 'manager-menu.component.html',
  styleUrls: ['manager-menu.component.css'],
})
export class ManagerMenu implements OnInit {
  menuItems: MenuItem[] = []
  filteredItems: MenuItem[] = []
  activeCategory: string = 'All'
  categories: string[] = ['All', 'Appetizers', 'Mains', 'Desserts', 'Drinks']

  // Modal state
  showModal: boolean = false
  isEditing: boolean = false
  editForm: Partial<MenuItem> = { name: '', category: 'Mains', price: 0, status: 'Available' }

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private mockData: MockDataService
  ) {
    this.title.setTitle('Menu Management - Gastros')
    this.meta.addTags([
      { property: 'og:title', content: 'Menu Management - Gastros' },
    ])
  }

  ngOnInit(): void {
    this.loadMenu()
  }

  loadMenu(): void {
    this.menuItems = this.mockData.getMenuItems()
    this.applyFilter()
  }

  applyFilter(): void {
    if (this.activeCategory === 'All') {
      this.filteredItems = [...this.menuItems]
    } else {
      this.filteredItems = this.menuItems.filter(i => i.category === this.activeCategory)
    }
  }

  filterByCategory(cat: string): void {
    this.activeCategory = cat
    this.applyFilter()
  }

  get totalItems(): number { return this.menuItems.length }
  get availableCount(): number { return this.menuItems.filter(i => i.status === 'Available').length }
  get unavailableCount(): number { return this.menuItems.filter(i => i.status === 'Unavailable').length }
  get categoryCount(): number {
    return new Set(this.menuItems.map(i => i.category)).size
  }

  openAddModal(): void {
    this.isEditing = false
    this.editForm = { name: '', category: 'Mains', price: 0, status: 'Available' }
    this.showModal = true
  }

  openEditModal(item: MenuItem): void {
    this.isEditing = true
    this.editForm = { ...item }
    this.showModal = true
  }

  closeModal(): void {
    this.showModal = false
  }

  saveItem(): void {
    if (!this.editForm.name || !this.editForm.price) return
    if (this.isEditing && this.editForm.id) {
      this.menuItems = this.mockData.updateMenuItem(this.editForm as MenuItem)
    } else {
      this.menuItems = this.mockData.addMenuItem({
        name: this.editForm.name!,
        category: this.editForm.category || 'Mains',
        price: this.editForm.price!,
        status: (this.editForm.status as any) || 'Available'
      })
    }
    this.applyFilter()
    this.showModal = false
  }

  deleteDish(item: MenuItem): void {
    if (confirm('Delete "' + item.name + '"?')) {
      this.menuItems = this.mockData.deleteMenuItem(item.id)
      this.applyFilter()
    }
  }

  toggleStatus(item: MenuItem): void {
    this.menuItems = this.mockData.toggleMenuItemStatus(item.id)
    this.applyFilter()
  }

  navigateTo(path: string): void {
    this.router.navigate([path])
  }

  logout(): void {
    this.mockData.logout()
    this.router.navigate(['/'])
  }
}
