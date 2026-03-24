# Restaurant Management Platform - Angular Application Index

## 📋 Quick Navigation

### 🚀 Getting Started
1. Read [`README.md`](./README.md) - Complete feature documentation
2. Follow [`SETUP.md`](./SETUP.md) - Installation and setup guide
3. Check [`../ANGULAR_CONVERSION_COMPLETE.md`](../ANGULAR_CONVERSION_COMPLETE.md) - Conversion summary

### 📁 Project Structure

```
angular-app/
│
├── 📄 Configuration Files
│   ├── package.json           # Dependencies and scripts
│   ├── angular.json           # Angular CLI config
│   ├── tsconfig.json          # TypeScript config
│   └── tailwind.config.js     # Tailwind CSS config
│
├── 📚 Documentation
│   ├── README.md              # Main documentation
│   ├── SETUP.md               # Setup instructions
│   └── INDEX.md               # This file
│
└── src/
    ├── 🌐 Entry Points
    │   ├── index.html         # HTML entry
    │   ├── main.ts            # Angular bootstrap
    │   └── styles.css         # Global styles
    │
    └── app/
        ├── 🎯 Core
        │   ├── app.component.ts    # Root component
        │   └── app.routes.ts       # Application routing
        │
        ├── 📦 Models
        │   └── index.ts            # TypeScript interfaces
        │
        ├── ⚙️ Services
        │   ├── auth.service.ts     # Authentication
        │   └── data.service.ts     # Data management
        │
        └── 📄 Pages
            ├── login/              # Login page
            │   ├── login.component.ts
            │   ├── login.component.html
            │   └── login.component.css
            │
            ├── customer/           # Customer booking
            │   ├── customer.component.ts
            │   ├── customer.component.html
            │   └── customer.component.css
            │
            ├── staff/              # Staff POS
            │   ├── staff.component.ts
            │   ├── staff.component.html
            │   └── staff.component.css
            │
            └── manager/            # Manager portal
                ├── manager.component.ts
                ├── manager.component.html
                ├── manager.component.css
                ├── dashboard/      # Analytics
                ├── menu/           # Menu management
                ├── tables/         # Table management
                ├── inventory/      # Inventory
                ├── discounts/      # Discounts
                ├── employees/      # Employees
                └── reports/        # Reports
```

## 🎯 Quick Commands

### Development
```bash
npm install          # Install dependencies
npm start            # Start dev server
npm run build        # Production build
npm test             # Run tests
```

### Angular CLI
```bash
ng serve             # Start dev server
ng build             # Build project
ng generate          # Generate components
ng test              # Run unit tests
```

## 🔐 Login Credentials

| Role | Username | Password |
|------|----------|----------|
| 👤 Customer | `customer` | `customer123` |
| 👔 Staff | `staff` | `staff123` |
| 👨‍💼 Manager | `manager` | `manager123` |

## 🎨 Features by Interface

### Customer Interface (`/customer`)
- 🍽️ Table selection with capacity display
- 👥 Multi-table booking for large groups (10+)
- 📅 Date and time selection
- 📝 Special requests
- ✅ Booking confirmation

### Staff Interface (`/staff`)
- 🪑 Quick table selection
- 🍜 Menu browsing with categories
- 🛒 Real-time order management
- 🔢 Quantity controls
- 💰 Order total calculation
- 🔗 Table merging for large groups

### Manager Interface (`/manager`)
- 📊 **Dashboard**: Analytics and metrics
- 🍜 **Menu**: Item management
- 🪑 **Tables**: Table status and merging
- 📦 **Inventory**: Stock tracking
- 🎫 **Discounts**: Promo code management
- 👥 **Employees**: Staff directory
- 📈 **Reports**: Analytics export

## 🗺️ Route Map

```
/login              → Login page (role selection)
/customer           → Customer booking interface
/staff              → Staff POS system
/manager            → Manager portal (redirects to dashboard)
  ├── /manager                → Dashboard (analytics)
  ├── /manager/menu           → Menu management
  ├── /manager/tables         → Table management
  ├── /manager/inventory      → Inventory tracking
  ├── /manager/discounts      → Discount codes
  ├── /manager/employees      → Employee management
  └── /manager/reports        → Reports and analytics
```

## 📦 Key Dependencies

### Core
- **@angular/core**: ^18.0.0
- **@angular/common**: ^18.0.0
- **@angular/router**: ^18.0.0
- **rxjs**: ^7.8.1
- **typescript**: ~5.4.0

### UI
- **tailwindcss**: ^3.4.0
- **date-fns**: ^3.6.0

### Charts (Optional)
- **chart.js**: ^4.4.0
- **ng2-charts**: ^6.0.1

## 🎨 Design System

### Colors
```typescript
Primary:   #FF6B35  // Warm Orange
Secondary: #2D2D2D  // Dark Charcoal
Neutral:   #F5F5F5  // Light Gray
```

### Typography
- Font: System fonts (SF Pro, Segoe UI, Roboto)
- Headings: Font Weight 900
- Body: Font Weight 400
- Accent: Font Weight 700

## 🔧 Services

### AuthService (`auth.service.ts`)
```typescript
login(username, password, role)    // Authenticate user
logout()                            // Clear session
getCurrentUser()                    // Get current user
isAuthenticated()                   // Check if logged in
hasRole(role)                       // Check user role
```

### DataService (`data.service.ts`)
```typescript
// Tables
getTables()
updateTable(table)
mergeTables(tableIds)

// Menu
getMenuItems()
addMenuItem(item)
updateMenuItem(item)

// Orders
createOrder(order)
updateOrder(order)

// Reservations
createReservation(reservation)
updateReservation(reservation)

// More...
```

## 📊 Data Models

```typescript
User           // Authentication
Table          // Restaurant tables
MenuItem       // Menu items
Order          // Customer orders
OrderItem      // Individual items
Reservation    // Table bookings
Discount       // Promo codes
Employee       // Staff members
InventoryItem  // Stock items
Analytics      // Dashboard metrics
```

## 🎯 File Purpose Guide

### Components (`*.component.ts`)
- Business logic
- Data handling
- User interactions
- Lifecycle hooks

### Templates (`*.component.html`)
- UI structure
- Data binding
- Event handlers
- Directives

### Styles (`*.component.css`)
- Component-specific styles
- Responsive layouts
- Animations
- Theme overrides

### Services (`*.service.ts`)
- Shared logic
- Data management
- HTTP requests
- State management

## 🚀 Development Workflow

1. **Start Development Server**
   ```bash
   npm start
   ```

2. **Make Changes**
   - Edit component files
   - Auto-reload in browser

3. **Test Features**
   - Login with different roles
   - Test each interface
   - Verify responsive design

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Common Tasks

### Add New Menu Item
```typescript
// In manager menu component
const newItem: MenuItem = {
  id: `item-${Date.now()}`,
  name: 'Phở Gà',
  category: 'Main Course',
  price: 75000,
  description: 'Chicken noodle soup',
  available: true
};
this.dataService.addMenuItem(newItem);
```

### Create Reservation
```typescript
// In customer component
const reservation: Reservation = {
  id: `res-${Date.now()}`,
  customerName: this.customerName,
  customerPhone: this.customerPhone,
  date: this.date,
  time: this.time,
  guestCount: this.guestCount,
  tableIds: this.selectedTableIds,
  status: 'pending'
};
this.dataService.createReservation(reservation);
```

### Submit Order
```typescript
// In staff component
const order: Order = {
  id: `order-${Date.now()}`,
  tableId: this.selectedTable.id,
  items: this.currentOrder,
  status: 'pending',
  createdAt: new Date(),
  total: this.getOrderTotal(),
  staffId: this.currentUser.id
};
this.dataService.createOrder(order);
```

## 🎓 Learning Path

1. **Start Here**: README.md
2. **Setup**: SETUP.md
3. **Login Component**: See authentication flow
4. **Customer Component**: Learn forms and validation
5. **Staff Component**: Understand state management
6. **Manager Component**: Explore routing and navigation
7. **Services**: Study RxJS and observables

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [RxJS Guide](https://rxjs.dev/guide/overview)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🐛 Debugging Tips

### Component Not Loading
```bash
# Check the browser console
# Verify import statements
# Check Angular router configuration
```

### Styles Not Applied
```bash
# Verify Tailwind is configured
# Check component styleUrls
# Inspect element in browser DevTools
```

### Service Not Working
```bash
# Check if service is provided
# Verify dependency injection
# Check for RxJS subscription
```

## 🎁 Bonus Files

- **Mock Data**: Built into DataService
- **Type Definitions**: Complete TypeScript interfaces
- **Responsive Styles**: Mobile, Tablet, Desktop
- **Animations**: Fade-in effects and transitions

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review SETUP.md
3. Examine component code
4. Check browser console
5. Verify data service

---

## ✨ Quick Start Recap

```bash
# 1. Navigate to the Angular app
cd angular-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# 4. Open browser
# Visit: http://localhost:4200

# 5. Login
# Use: customer / customer123
```

**You're ready to go!** 🚀

---

**Restaurant Management Platform - Angular Edition**  
*Complete, Standalone, Production-Ready*
