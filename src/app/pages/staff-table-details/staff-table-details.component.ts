import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router, ActivatedRoute } from '@angular/router'
import { MockDataService, MenuItem, Order, OrderItem } from '../../services/mock-data.service'

@Component({
  selector: 'staff-table-details',
  templateUrl: 'staff-table-details.component.html',
  styleUrls: ['staff-table-details.component.css'],
})
export class StaffTableDetails implements OnInit {
  tableId: string = 'T1'
  menuItems: MenuItem[] = []
  filteredMenuItems: MenuItem[] = []
  order: Order = { tableId: 'T1', items: [], createdAt: '' }
  activeCategory: string = 'Appetizers'
  categories: string[] = ['Appetizers', 'Mains', 'Desserts', 'Drinks']
  orderTime: string = ''

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private route: ActivatedRoute,
    private mockData: MockDataService
  ) {
    this.title.setTitle('Order Management - Gastros')
    this.meta.addTags([
      { property: 'og:title', content: 'Order Management - Gastros' },
    ])
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tableId = params['tableId'] || 'T1'
      this.loadData()
    })
  }

  loadData(): void {
    this.menuItems = this.mockData.getMenuItems().filter(i => i.status === 'Available')
    this.order = this.mockData.getOrder(this.tableId)
    this.orderTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    this.applyFilter()
    // Mark table as occupied
    this.mockData.setTableStatus(this.tableId, 'occupied')
  }

  applyFilter(): void {
    this.filteredMenuItems = this.menuItems.filter(i => i.category === this.activeCategory)
  }

  filterCategory(cat: string): void {
    this.activeCategory = cat
    this.applyFilter()
  }

  get categoryItemCount(): number {
    return this.filteredMenuItems.length
  }

  addToOrder(item: MenuItem): void {
    this.order = this.mockData.addItemToOrder(this.tableId, item)
  }

  increaseQty(orderItem: OrderItem): void {
    this.order = this.mockData.updateItemQuantity(this.tableId, orderItem.menuItemId, orderItem.quantity + 1)
  }

  decreaseQty(orderItem: OrderItem): void {
    this.order = this.mockData.updateItemQuantity(this.tableId, orderItem.menuItemId, orderItem.quantity - 1)
  }

  removeFromOrder(orderItem: OrderItem): void {
    this.order = this.mockData.removeItemFromOrder(this.tableId, orderItem.menuItemId)
  }

  get subtotal(): number {
    return this.order.items.reduce((s, i) => s + i.price * i.quantity, 0)
  }

  get tax(): number {
    return this.subtotal * 0.1
  }

  get total(): number {
    return this.subtotal + this.tax
  }

  backToTables(): void {
    this.router.navigate(['/staff-tables'])
  }

  sendOrder(): void {
    alert('Order sent to kitchen!')
  }

  checkout(): void {
    if (this.order.items.length === 0) {
      alert('No items in order')
      return
    }
    alert('Checkout complete! Total: $' + this.total.toFixed(2))
    this.mockData.clearOrder(this.tableId)
    this.mockData.setTableStatus(this.tableId, 'available')
    this.router.navigate(['/staff-tables'])
  }

  navigateTo(path: string): void {
    this.router.navigate([path])
  }

  logout(): void {
    this.mockData.logout()
    this.router.navigate(['/'])
  }
}
