# Restaurant Management Platform - Angular Implementation

This is a complete Angular implementation of the Restaurant Management Platform, featuring Customer Booking, Staff POS, and Manager Dashboard interfaces.

## 🎯 Features

- **Customer Interface**: Table booking with multi-table selection for large groups (10+ guests)
- **Staff POS**: High-speed order management with tablet optimization
- **Manager Dashboard**: Analytics, menu management, inventory, discounts, and employee management
- **Authentication**: Role-based access control (Customer, Staff, Manager)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Color Palette**: Warm Orange (#FF6B35), Dark Charcoal (#2D2D2D), Light Neutral (#F5F5F5)

## 📁 Project Structure

```
angular-app/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── index.ts                 # TypeScript interfaces
│   │   ├── services/
│   │   │   ├── auth.service.ts          # Authentication service
│   │   │   └── data.service.ts          # Data management service
│   │   ├── pages/
│   │   │   ├── login/                   # Login page
│   │   │   ├── customer/                # Customer booking interface
│   │   │   ├── staff/                   # Staff POS interface
│   │   │   └── manager/                 # Manager dashboard
│   │   │       ├── dashboard/           # Analytics dashboard
│   │   │       ├── menu/                # Menu management
│   │   │       ├── tables/              # Table management
│   │   │       ├── inventory/           # Inventory tracking
│   │   │       ├── discounts/           # Discount management
│   │   │       ├── employees/           # Employee management
│   │   │       └── reports/             # Reports and analytics
│   │   ├── app.component.ts             # Root component
│   │   └── app.routes.ts                # Application routing
│   ├── styles.css                       # Global styles (Tailwind)
│   ├── index.html                       # HTML entry point
│   └── main.ts                          # Angular bootstrap
├── angular.json                         # Angular CLI configuration
├── tsconfig.json                        # TypeScript configuration
├── tailwind.config.js                   # Tailwind CSS configuration
├── package.json                         # Dependencies
└── README.md                            # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 18+

### Installation

```bash
# Navigate to the Angular app directory
cd angular-app

# Install dependencies
npm install

# Install Angular CLI globally (if not installed)
npm install -g @angular/cli

# Start development server
npm start
```

The application will be available at `http://localhost:4200`

### Build for Production

```bash
npm run build
```

Production files will be in `dist/restaurant-management/`

## 🔐 Authentication

### Demo Credentials

**Customer**
- Username: `customer`
- Password: `customer123`

**Staff**
- Username: `staff`
- Password: `staff123`

**Manager**
- Username: `manager`
- Password: `manager123`

## 💡 Key Components

### 1. Login Component
- Role selection (Customer, Staff, Manager)
- Form validation
- Automatic routing based on role
- Mobile-responsive design

### 2. Customer Booking
- Guest counter with visual feedback
- Multi-table selection for large groups (10+)
- Table capacity indicator
- Date and time selection
- Special requests field
- Reservation confirmation

### 3. Staff POS
- Table selection
- Menu browsing with categories
- Order management (add/remove items)
- Quantity adjustment
- Order total calculation
- Table status management
- Table merging for large groups

### 4. Manager Dashboard

#### Dashboard (Analytics)
- Revenue metrics
- Order statistics
- Popular items chart
- Revenue trends
- Hourly order distribution

#### Menu Management
- Add/Edit/Delete menu items
- Category organization
- Price management
- Availability toggle
- Image upload support

#### Table Management
- Table status overview
- Capacity management
- Merge/unmerge tables
- Reservation assignment

#### Inventory
- Stock tracking
- Low stock alerts
- Restock management
- Category organization

#### Discounts
- Create discount codes
- Percentage or fixed amount
- Minimum order requirements
- Validity period
- Active/inactive toggle

#### Employees
- Employee directory
- Role assignment
- Contact information
- Hire date tracking
- Active status management

#### Reports
- Revenue reports
- Order analytics
- Performance metrics
- Export functionality

## 🎨 Styling

### Color Palette

```css
Primary (Warm Orange): #FF6B35
Secondary (Dark Charcoal): #2D2D2D
Neutral (Light): #F5F5F5
```

### Tailwind Configuration

Tailwind CSS v3 is configured with custom colors matching the design system. All components use utility classes for consistency.

## 📱 Responsive Design

- **Mobile First**: Optimized for small screens
- **Tablet**: Enhanced POS interface for staff
- **Desktop**: Full dashboard experience for managers

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Services

### AuthService
- User authentication
- Role-based access control
- Session management
- Auto-routing on login/logout

### DataService
- Centralized data management
- RxJS observables for reactive updates
- Mock data for development
- CRUD operations for all entities

## 🧩 Models

All TypeScript interfaces are defined in `src/app/models/index.ts`:

- `User` - User authentication
- `Table` - Restaurant tables
- `MenuItem` - Menu items
- `Order` - Customer orders
- `OrderItem` - Individual order items
- `Reservation` - Table reservations
- `Discount` - Discount codes
- `Employee` - Staff members
- `InventoryItem` - Inventory tracking
- `Analytics` - Dashboard metrics

## 🛣️ Routing

```typescript
/login              - Login page
/customer           - Customer booking interface
/staff              - Staff POS interface
/manager            - Manager dashboard (with nested routes)
  /manager          - Analytics dashboard
  /manager/menu     - Menu management
  /manager/tables   - Table management
  /manager/inventory - Inventory
  /manager/discounts - Discounts
  /manager/employees - Employees
  /manager/reports  - Reports
```

## 🔄 State Management

- **RxJS BehaviorSubjects** for reactive state
- **LocalStorage** for persistence
- **Service-based architecture** for shared state
- **Observable patterns** for component communication

## 🎯 Features Implementation

### Table Merging (Large Groups)
```typescript
// Customer can select multiple tables
selectMultipleTables(tableIds: string[]): void {
  this.selectedTableIds = tableIds;
  const totalCapacity = this.getTotalCapacity();
}

// Staff can merge tables for service
mergeTables(tableIds: string[]): void {
  this.dataService.mergeTables(tableIds);
}
```

### One Receipt Per Table
Each table maintains a single order that can be updated by staff until payment.

### High-Speed Workflow
- Optimized for tablet use
- Quick table selection
- Fast menu browsing
- One-click order items
- Minimal navigation required

## 📦 Dependencies

### Core
- Angular 18
- RxJS 7.8
- TypeScript 5.4

### UI
- Tailwind CSS 3.4
- PostCSS
- Autoprefixer

### Charts (for Manager Dashboard)
- Chart.js 4.4
- ng2-charts 6.0

### Utilities
- date-fns 3.6

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run e2e
```

## 📝 Development Notes

### Adding New Menu Items
```typescript
const newItem: MenuItem = {
  id: `item-${Date.now()}`,
  name: 'Dish Name',
  category: 'Main Course',
  price: 75000,
  description: 'Description',
  available: true
};
this.dataService.addMenuItem(newItem);
```

### Creating Orders
```typescript
const order: Order = {
  id: `order-${Date.now()}`,
  tableId: selectedTable.id,
  items: orderItems,
  status: 'pending',
  createdAt: new Date(),
  updatedAt: new Date(),
  total: calculateTotal(orderItems),
  staffId: currentUser.id
};
this.dataService.createOrder(order);
```

### Managing Reservations
```typescript
const reservation: Reservation = {
  id: `res-${Date.now()}`,
  customerName: 'John Doe',
  customerPhone: '0901234567',
  date: '2024-03-20',
  time: '19:00',
  guestCount: 8,
  tableIds: ['table-1', 'table-2'], // Multiple tables for large groups
  status: 'confirmed'
};
this.dataService.createReservation(reservation);
```

## 🌐 Internationalization

Currently supports Vietnamese restaurant context with Vietnamese Dong (đ) currency formatting.

To add more languages, use Angular's i18n:
```bash
ng extract-i18n
```

## 🔒 Security

- Client-side authentication (demo only)
- In production, implement:
  - JWT tokens
  - Backend API integration
  - Secure password hashing
  - Role-based guards
  - HTTPS only

## 🚀 Deployment

### Build
```bash
npm run build -- --configuration=production
```

### Deploy to Various Platforms

#### Netlify
```bash
netlify deploy --prod --dir=dist/restaurant-management
```

#### Vercel
```bash
vercel --prod
```

#### Firebase
```bash
firebase deploy
```

## 📊 Performance

- Lazy-loaded routes
- OnPush change detection strategy
- Optimized bundle size
- Tree-shaking enabled
- AOT compilation

## 🐛 Known Issues

1. Mock data only - no backend integration
2. Authentication is client-side only
3. No real-time updates (would need WebSockets)
4. No payment processing integration

## 🗺️ Roadmap

- [ ] Backend API integration
- [ ] Real-time order updates (WebSockets)
- [ ] Payment processing
- [ ] Email notifications
- [ ] SMS confirmation
- [ ] Kitchen display system
- [ ] QR code table ordering
- [ ] Multi-language support
- [ ] Dark mode

## 🤝 Contributing

This is a demo application. For production use:

1. Implement proper backend API
2. Add authentication guards
3. Integrate payment gateway
4. Add unit tests
5. Implement E2E tests
6. Add error handling
7. Implement logging

## 📄 License

MIT License - Feel free to use for your projects

## 👥 Support

For issues or questions:
1. Check existing documentation
2. Review the code comments
3. Examine the service implementations

## 🎓 Learning Resources

- [Angular Documentation](https://angular.io/docs)
- [RxJS Guide](https://rxjs.dev/guide/overview)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Built with Angular 18 + TypeScript + Tailwind CSS**

*Vietnamese Restaurant Management Platform - Complete Standalone Angular Implementation*
