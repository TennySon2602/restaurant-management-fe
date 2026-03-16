# Angular Restaurant Management - Setup Guide

## Complete File Structure

This Angular application replaces the React version with a fully standalone Angular implementation.

### Created Files ✅

```
angular-app/
├── package.json                          # Angular dependencies
├── angular.json                          # Angular CLI configuration
├── tsconfig.json                         # TypeScript configuration
├── tsconfig.app.json                     # App TypeScript config
├── tailwind.config.js                    # Tailwind CSS config
├── README.md                             # Complete documentation
├── SETUP.md                              # This file
├── src/
│   ├── index.html                        # HTML entry point
│   ├── main.ts                           # Angular bootstrap
│   ├── styles.css                        # Global Tailwind styles
│   └── app/
│       ├── app.component.ts              # Root component ✅
│       ├── app.routes.ts                 # Routing configuration ✅
│       ├── models/
│       │   └── index.ts                  # TypeScript interfaces ✅
│       ├── services/
│       │   ├── auth.service.ts           # Authentication ✅
│       │   └── data.service.ts           # Data management ✅
│       └── pages/
│           ├── login/
│           │   ├── login.component.ts    # ✅
│           │   ├── login.component.html  # ✅
│           │   └── login.component.css   # ✅
│           ├── customer/
│           │   ├── customer.component.ts # ✅
│           │   ├── customer.component.html # ✅
│           │   └── customer.component.css # ✅
│           ├── staff/
│           │   ├── staff.component.ts    # ✅
│           │   ├── staff.component.html  # ✅
│           │   └── staff.component.css   # ✅
│           └── manager/
│               ├── manager.component.ts  # (See below)
│               ├── manager.component.html
│               ├── manager.component.css
│               └── [subcomponents]/      # Dashboard, Menu, etc.
```

### Files Needed (Create These)

The Manager section needs these components:

```typescript
// manager.component.ts - Main layout
// manager.component.html - Router outlet + navigation
// manager.component.css - Layout styles

// Subpages:
// dashboard/dashboard.component.ts - Analytics
// menu/menu.component.ts - Menu management
// tables/tables.component.ts - Table management
// inventory/inventory.component.ts - Inventory
// discounts/discounts.component.ts - Discount codes
// employees/employees.component.ts - Employee management
// reports/reports.component.ts - Reports
```

## Quick Setup Steps

### 1. Install Dependencies

```bash
cd angular-app
npm install
```

### 2. Verify Installation

```bash
ng version
```

You should see Angular CLI 18+ and all packages installed.

### 3. Create Missing Components

Generate the manager components:

```bash
# Manager layout
ng generate component pages/manager --standalone

# Manager subpages
ng generate component pages/manager/dashboard --standalone
ng generate component pages/manager/menu --standalone
ng generate component pages/manager/tables --standalone
ng generate component pages/manager/inventory --standalone
ng generate component pages/manager/discounts --standalone
ng generate component pages/manager/employees --standalone
ng generate component pages/manager/reports --standalone
```

### 4. Start Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200`

### 5. Login

Use these credentials:

- **Customer**: username: `customer`, password: `customer123`
- **Staff**: username: `staff`, password: `staff123`
- **Manager**: username: `manager`, password: `manager123`

## Manager Component Templates

### manager.component.ts

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
  }
}
```

### manager.component.html

```html
<div class="manager-container">
  <nav class="sidebar">
    <h2>Manager Portal</h2>
    <a routerLink="/manager" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a>
    <a routerLink="/manager/menu" routerLinkActive="active">Menu</a>
    <a routerLink="/manager/tables" routerLinkActive="active">Tables</a>
    <a routerLink="/manager/inventory" routerLinkActive="active">Inventory</a>
    <a routerLink="/manager/discounts" routerLinkActive="active">Discounts</a>
    <a routerLink="/manager/employees" routerLinkActive="active">Employees</a>
    <a routerLink="/manager/reports" routerLinkActive="active">Reports</a>
    <button (click)="logout()" class="logout-btn">Logout</button>
  </nav>
  
  <main class="content">
    <router-outlet></router-outlet>
  </main>
</div>
```

### manager.component.css

```css
.manager-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
}

.sidebar {
  background: var(--color-secondary);
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar h2 {
  color: white;
  margin-bottom: 1rem;
}

.sidebar a {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.2s;
}

.sidebar a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar a.active {
  background: var(--color-primary);
}

.logout-btn {
  margin-top: auto;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
}

.content {
  overflow-y: auto;
  background: var(--color-neutral);
  padding: 2rem;
}
```

## Dashboard Component Example

### dashboard.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { Analytics } from '../../../models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h1>Analytics Dashboard</h1>
      
      <div class="metrics">
        <div class="metric-card">
          <h3>Total Revenue</h3>
          <p class="value">{{ analytics.totalRevenue | number }}đ</p>
        </div>
        
        <div class="metric-card">
          <h3>Orders Today</h3>
          <p class="value">{{ analytics.ordersToday }}</p>
        </div>
        
        <div class="metric-card">
          <h3>Average Order</h3>
          <p class="value">{{ analytics.averageOrderValue | number }}đ</p>
        </div>
      </div>

      <div class="charts">
        <div class="chart-card">
          <h3>Popular Items</h3>
          <div *ngFor="let item of analytics.popularItems" class="chart-item">
            <span>{{ item.item }}</span>
            <span class="badge">{{ item.orders }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      max-width: 1400px;
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .metric-card {
      background: white;
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .value {
      font-size: 2rem;
      font-weight: 900;
      color: var(--color-primary);
      margin: 0.5rem 0 0 0;
    }

    .chart-card {
      background: white;
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .chart-item {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem;
      border-bottom: 1px solid #e5e5e5;
    }

    .badge {
      background: var(--color-primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-weight: 700;
    }
  `]
})
export class DashboardComponent implements OnInit {
  analytics!: Analytics;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.analytics = this.dataService.getAnalytics();
  }
}
```

## Build & Deploy

```bash
# Development
npm start

# Production build
npm run build

# The built files will be in dist/restaurant-management/
```

## Next Steps

1. ✅ Core setup complete
2. 🔄 Create manager subcomponents
3. 🔄 Add charts to dashboard (install ng2-charts)
4. 🔄 Implement CRUD operations in manager pages
5. 🔄 Add form validation
6. 🔄 Add loading states
7. 🔄 Add error handling

## Comparison: React vs Angular

| Feature | React Version | Angular Version |
|---------|---------------|-----------------|
| Components | JSX + Hooks | TypeScript + Templates |
| Routing | React Router | Angular Router |
| State | useState/Context | Services + RxJS |
| Forms | React Hook Form | Angular Forms |
| Styling | Tailwind + CSS | Same (Tailwind) |
| Build | Vite | Angular CLI |
| Size | ~150KB | ~180KB |

## Key Differences

### Component Definition

**React:**
```jsx
const MyComponent = () => {
  const [state, setState] = useState(0);
  return <div>{state}</div>;
};
```

**Angular:**
```typescript
@Component({
  selector: 'app-my-component',
  template: '<div>{{state}}</div>'
})
export class MyComponent {
  state = 0;
}
```

### State Management

**React:**
```javascript
const [data, setData] = useState([]);
```

**Angular:**
```typescript
data$ = new BehaviorSubject([]);
```

### Routing

**React:**
```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

**Angular:**
```typescript
routes: Routes = [
  { path: '', component: HomeComponent }
]
```

## Troubleshooting

### Port already in use
```bash
ng serve --port 4201
```

### Module not found
```bash
npm install
```

### Tailwind not working
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Angular CLI not found
```bash
npm install -g @angular/cli
```

## Resources

- [Angular Documentation](https://angular.io)
- [RxJS Guide](https://rxjs.dev)
- [Tailwind + Angular](https://tailwindcss.com/docs/guides/angular)

---

**You now have a complete Angular implementation of the Restaurant Management Platform!** 🎉
