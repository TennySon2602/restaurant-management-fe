import { Injectable } from '@angular/core'

export interface MenuItem {
  id: number
  name: string
  category: string
  price: number
  status: 'Available' | 'Unavailable'
}

export interface TableItem {
  id: string
  seats: number
  location: string
  status: 'available' | 'occupied' | 'reserved'
}

export interface OrderItem {
  menuItemId: number
  name: string
  price: number
  quantity: number
}

export interface Order {
  tableId: string
  items: OrderItem[]
  createdAt: string
}

export interface UserInfo {
  username: string
  role: 'manager' | 'staff' | 'customer'
}

const MOCK_ACCOUNTS = [
  { username: 'admin', password: '123456', role: 'manager' as const },
  { username: 'staff', password: '123456', role: 'staff' as const },
]

const DEFAULT_MENU: MenuItem[] = [
  { id: 1, name: 'Phở bò', category: 'Mains', price: 12, status: 'Available' },
  { id: 2, name: 'Bún chả', category: 'Mains', price: 10, status: 'Available' },
  { id: 3, name: 'Cơm rang', category: 'Mains', price: 8, status: 'Available' },
  { id: 4, name: 'Trà đá', category: 'Drinks', price: 2, status: 'Available' },
  { id: 5, name: 'Caesar Salad', category: 'Appetizers', price: 14, status: 'Available' },
  { id: 6, name: 'Lobster Bisque', category: 'Appetizers', price: 18, status: 'Available' },
  { id: 7, name: 'Truffle Pasta', category: 'Mains', price: 28, status: 'Available' },
  { id: 8, name: 'Grilled Salmon', category: 'Mains', price: 35, status: 'Unavailable' },
  { id: 9, name: 'Wagyu Steak', category: 'Mains', price: 65, status: 'Available' },
  { id: 10, name: 'Chocolate Lava', category: 'Desserts', price: 12, status: 'Available' },
  { id: 11, name: 'Tiramisu', category: 'Desserts', price: 10, status: 'Available' },
  { id: 12, name: 'Bruschetta', category: 'Appetizers', price: 12, status: 'Available' },
]

const DEFAULT_TABLES: TableItem[] = [
  { id: 'T1', seats: 2, location: 'Window', status: 'available' },
  { id: 'T2', seats: 2, location: 'Window', status: 'available' },
  { id: 'T3', seats: 4, location: 'Main Hall', status: 'occupied' },
  { id: 'T4', seats: 4, location: 'Main Hall', status: 'available' },
  { id: 'T5', seats: 2, location: 'Bar', status: 'available' },
  { id: 'T6', seats: 2, location: 'Bar', status: 'available' },
  { id: 'T7', seats: 6, location: 'Window', status: 'reserved' },
  { id: 'T8', seats: 4, location: 'Main Hall', status: 'available' },
  { id: 'T9', seats: 4, location: 'Main Hall', status: 'occupied' },
  { id: 'T10', seats: 2, location: 'Bar', status: 'available' },
  { id: 'T11', seats: 6, location: 'Window', status: 'available' },
  { id: 'T12', seats: 4, location: 'Main Hall', status: 'available' },
]

@Injectable({ providedIn: 'root' })
export class MockDataService {

  // ─── Auth ───
  login(username: string, password: string): UserInfo | null {
    const account = MOCK_ACCOUNTS.find(
      a => a.username === username && a.password === password
    )
    if (!account) return null
    const user: UserInfo = { username: account.username, role: account.role }
    localStorage.setItem('rms_user', JSON.stringify(user))
    return user
  }

  quickLogin(role: 'manager' | 'staff' | 'customer'): UserInfo {
    const user: UserInfo = { username: role, role }
    localStorage.setItem('rms_user', JSON.stringify(user))
    return user
  }

  logout(): void {
    localStorage.removeItem('rms_user')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('rms_user')
  }

  getCurrentUser(): UserInfo | null {
    const raw = localStorage.getItem('rms_user')
    return raw ? JSON.parse(raw) : null
  }

  // ─── Menu ───
  getMenuItems(): MenuItem[] {
    const raw = localStorage.getItem('rms_menu')
    if (raw) return JSON.parse(raw)
    this.saveMenuItems(DEFAULT_MENU)
    return [...DEFAULT_MENU]
  }

  saveMenuItems(items: MenuItem[]): void {
    localStorage.setItem('rms_menu', JSON.stringify(items))
  }

  addMenuItem(item: Omit<MenuItem, 'id'>): MenuItem[] {
    const items = this.getMenuItems()
    const maxId = items.reduce((max, i) => Math.max(max, i.id), 0)
    items.push({ ...item, id: maxId + 1 })
    this.saveMenuItems(items)
    return items
  }

  updateMenuItem(updated: MenuItem): MenuItem[] {
    let items = this.getMenuItems()
    items = items.map(i => i.id === updated.id ? updated : i)
    this.saveMenuItems(items)
    return items
  }

  deleteMenuItem(id: number): MenuItem[] {
    let items = this.getMenuItems().filter(i => i.id !== id)
    this.saveMenuItems(items)
    return items
  }

  toggleMenuItemStatus(id: number): MenuItem[] {
    let items = this.getMenuItems()
    items = items.map(i => {
      if (i.id === id) {
        return { ...i, status: i.status === 'Available' ? 'Unavailable' as const : 'Available' as const }
      }
      return i
    })
    this.saveMenuItems(items)
    return items
  }

  // ─── Tables ───
  getTables(): TableItem[] {
    const raw = localStorage.getItem('rms_tables')
    if (raw) return JSON.parse(raw)
    this.saveTables(DEFAULT_TABLES)
    return [...DEFAULT_TABLES]
  }

  saveTables(tables: TableItem[]): void {
    localStorage.setItem('rms_tables', JSON.stringify(tables))
  }

  addTable(table: TableItem): TableItem[] {
    const tables = this.getTables()
    tables.push(table)
    this.saveTables(tables)
    return tables
  }

  updateTable(updated: TableItem): TableItem[] {
    let tables = this.getTables()
    tables = tables.map(t => t.id === updated.id ? updated : t)
    this.saveTables(tables)
    return tables
  }

  deleteTable(id: string): TableItem[] {
    let tables = this.getTables().filter(t => t.id !== id)
    this.saveTables(tables)
    return tables
  }

  setTableStatus(id: string, status: 'available' | 'occupied' | 'reserved'): TableItem[] {
    let tables = this.getTables()
    tables = tables.map(t => t.id === id ? { ...t, status } : t)
    this.saveTables(tables)
    return tables
  }

  // ─── Orders ───
  getOrder(tableId: string): Order {
    const raw = localStorage.getItem('rms_orders')
    const orders: Record<string, Order> = raw ? JSON.parse(raw) : {}
    if (!orders[tableId]) {
      orders[tableId] = { tableId, items: [], createdAt: new Date().toISOString() }
    }
    return orders[tableId]
  }

  saveOrder(order: Order): void {
    const raw = localStorage.getItem('rms_orders')
    const orders: Record<string, Order> = raw ? JSON.parse(raw) : {}
    orders[order.tableId] = order
    localStorage.setItem('rms_orders', JSON.stringify(orders))
  }

  addItemToOrder(tableId: string, menuItem: MenuItem): Order {
    const order = this.getOrder(tableId)
    const existing = order.items.find(i => i.menuItemId === menuItem.id)
    if (existing) {
      existing.quantity++
    } else {
      order.items.push({
        menuItemId: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: 1
      })
    }
    this.saveOrder(order)
    return order
  }

  removeItemFromOrder(tableId: string, menuItemId: number): Order {
    const order = this.getOrder(tableId)
    order.items = order.items.filter(i => i.menuItemId !== menuItemId)
    this.saveOrder(order)
    return order
  }

  updateItemQuantity(tableId: string, menuItemId: number, quantity: number): Order {
    const order = this.getOrder(tableId)
    if (quantity <= 0) {
      order.items = order.items.filter(i => i.menuItemId !== menuItemId)
    } else {
      const item = order.items.find(i => i.menuItemId === menuItemId)
      if (item) item.quantity = quantity
    }
    this.saveOrder(order)
    return order
  }

  clearOrder(tableId: string): void {
    const raw = localStorage.getItem('rms_orders')
    const orders: Record<string, Order> = raw ? JSON.parse(raw) : {}
    delete orders[tableId]
    localStorage.setItem('rms_orders', JSON.stringify(orders))
  }
}
