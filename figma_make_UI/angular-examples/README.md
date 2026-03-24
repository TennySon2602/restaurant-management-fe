# Angular Integration Examples

This directory contains complete, production-ready Angular examples for integrating the Restaurant Management Platform web components.

## Files

- **`restaurant.service.ts`** - Service for managing web component state and preferences
- **`restaurant.component.ts`** - Complete example component with all features
- **`README.md`** - This file

## Quick Start

### 1. Copy Files to Your Angular Project

```bash
# Copy the service
cp angular-examples/restaurant.service.ts your-angular-app/src/app/services/

# Copy the component
cp angular-examples/restaurant.component.ts your-angular-app/src/app/components/
```

### 2. Install and Build Web Components

```bash
# In the React project directory
npm install
npm run build

# Copy to Angular assets
cp -r dist/* your-angular-app/src/assets/restaurant-components/
```

### 3. Configure Angular

Update `angular.json`:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "scripts": [
              "src/assets/restaurant-components/index.js"
            ],
            "styles": [
              "src/assets/restaurant-components/style.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

### 4. Use in Your Application

#### Option A: Standalone Component (Angular 14+)

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RestaurantComponent } from './components/restaurant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RestaurantComponent],
  template: '<app-restaurant></app-restaurant>'
})
export class AppComponent {}
```

#### Option B: Module-based (Angular 13 and below)

```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestaurantComponent } from './components/restaurant.component';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [RestaurantComponent]
})
export class AppModule {}
```

## Service Usage

The `RestaurantService` provides a reactive interface for managing the web components:

```typescript
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <button (click)="switchToCustomer()">Customer View</button>
      <button (click)="switchToStaff()">Staff View</button>
      <button (click)="toggleTheme()">Toggle Theme</button>
      
      <p>Current View: {{ currentView$ | async }}</p>
      <p>Current Theme: {{ theme$ | async }}</p>
    </div>
  `
})
export class MyComponent implements OnInit {
  currentView$ = this.restaurantService.currentView$;
  theme$ = this.restaurantService.theme$;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    // Check if components are loaded
    this.restaurantService.waitForComponents().then(() => {
      console.log('All components loaded!');
    });
  }

  switchToCustomer() {
    this.restaurantService.setView('customer');
  }

  switchToStaff() {
    this.restaurantService.setView('staff');
    this.restaurantService.setStaffInfo('emp-123', 'John Doe');
  }

  toggleTheme() {
    this.restaurantService.toggleTheme();
  }
}
```

## Component Examples

### Simple Customer Booking

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="booking-page">
      <h1>Make a Reservation</h1>
      <customer-booking theme="light"></customer-booking>
    </div>
  `
})
export class BookingComponent {}
```

### Staff POS with Dynamic Data

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="pos-page">
      <div class="staff-selector">
        <select [(ngModel)]="selectedStaff" (change)="onStaffChange()">
          <option *ngFor="let staff of staffMembers" [value]="staff.id">
            {{ staff.name }}
          </option>
        </select>
      </div>
      
      <staff-pos 
        [attr.staff-id]="selectedStaff"
        [attr.staff-name]="getStaffName(selectedStaff)">
      </staff-pos>
    </div>
  `
})
export class POSComponent {
  selectedStaff = 'emp-001';
  
  staffMembers = [
    { id: 'emp-001', name: 'John Doe' },
    { id: 'emp-002', name: 'Jane Smith' },
    { id: 'emp-003', name: 'Bob Johnson' }
  ];

  getStaffName(id: string): string {
    return this.staffMembers.find(s => s.id === id)?.name || '';
  }

  onStaffChange() {
    console.log('Staff changed to:', this.selectedStaff);
  }
}
```

### Manager Dashboard with Router

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="manager-page">
      <nav class="manager-nav">
        <button (click)="goBack()">← Back to Home</button>
        <h1>Manager Dashboard</h1>
        <button (click)="logout()">Logout</button>
      </nav>
      
      <manager-dashboard></manager-dashboard>
    </div>
  `,
  styles: [`
    .manager-page {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .manager-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #2D2D2D;
      color: white;
    }
    
    .manager-nav button {
      padding: 0.5rem 1rem;
      background: #FF6B35;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  `]
})
export class ManagerComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  logout() {
    // Implement logout logic
    this.router.navigate(['/login']);
  }
}
```

## Routing Setup

Create a complete routing structure:

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { BookingComponent } from './components/booking.component';
import { POSComponent } from './components/pos.component';
import { ManagerComponent } from './components/manager.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'pos', component: POSComponent },
  { path: 'manager', component: ManagerComponent },
  { path: '**', redirectTo: '' }
];
```

## State Management

### Using RxJS

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestaurantStateService {
  private state = new BehaviorSubject({
    currentOrder: null,
    selectedTable: null,
    reservation: null
  });

  state$ = this.state.asObservable();

  updateOrder(order: any) {
    this.state.next({ ...this.state.value, currentOrder: order });
  }

  updateTable(table: any) {
    this.state.next({ ...this.state.value, selectedTable: table });
  }
}
```

### Using NgRx (Optional)

```typescript
// state/restaurant.actions.ts
import { createAction, props } from '@ngrx/store';

export const setView = createAction(
  '[Restaurant] Set View',
  props<{ view: string }>()
);

export const setTheme = createAction(
  '[Restaurant] Set Theme',
  props<{ theme: 'light' | 'dark' }>()
);

// state/restaurant.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as RestaurantActions from './restaurant.actions';

export interface State {
  view: string;
  theme: 'light' | 'dark';
}

const initialState: State = {
  view: 'customer',
  theme: 'light'
};

export const reducer = createReducer(
  initialState,
  on(RestaurantActions.setView, (state, { view }) => ({ ...state, view })),
  on(RestaurantActions.setTheme, (state, { theme }) => ({ ...state, theme }))
);
```

## Testing

### Component Test

```typescript
// restaurant.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantService } from '../services/restaurant.service';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;
  let service: RestaurantService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RestaurantService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle theme', () => {
    const initialTheme = service.getTheme();
    component.toggleTheme();
    expect(service.getTheme()).not.toBe(initialTheme);
  });

  it('should set view', () => {
    component.setView('staff');
    expect(service.getCurrentView()).toBe('staff');
  });
});
```

### Service Test

```typescript
// restaurant.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get view', () => {
    service.setView('manager');
    expect(service.getCurrentView()).toBe('manager');
  });

  it('should toggle theme', () => {
    const initial = service.getTheme();
    service.toggleTheme();
    expect(service.getTheme()).not.toBe(initial);
  });

  it('should persist preferences', () => {
    service.setView('staff');
    service.setTheme('dark');
    
    // Create new instance to test persistence
    const newService = new RestaurantService();
    expect(newService.getCurrentView()).toBe('staff');
    expect(newService.getTheme()).toBe('dark');
  });
});
```

## Production Build

### Optimize for Production

```json
// angular.json - production configuration
{
  "configurations": {
    "production": {
      "optimization": true,
      "outputHashing": "all",
      "sourceMap": false,
      "namedChunks": false,
      "extractLicenses": true,
      "vendorChunk": false,
      "buildOptimizer": true,
      "budgets": [
        {
          "type": "initial",
          "maximumWarning": "2mb",
          "maximumError": "5mb"
        }
      ]
    }
  }
}
```

### Build and Deploy

```bash
# Build Angular app
ng build --configuration=production

# Deploy to your server
# The web components will be bundled in the assets folder
```

## Troubleshooting

### Common Issues

**Issue**: Components not rendering
- **Solution**: Check that CUSTOM_ELEMENTS_SCHEMA is added
- Verify scripts are loaded in angular.json
- Check browser console for errors

**Issue**: Styles not applied
- **Solution**: Ensure CSS is in the styles array
- Check that Shadow DOM is supported
- Verify asset paths are correct

**Issue**: TypeScript errors
- **Solution**: Add types.d.ts to tsconfig.json includes
- Use CUSTOM_ELEMENTS_SCHEMA to suppress warnings

## Best Practices

1. **Lazy Load**: Load web components only when needed
2. **Error Handling**: Always check if components are loaded
3. **Type Safety**: Use the provided TypeScript definitions
4. **State Management**: Use the service for consistent state
5. **Testing**: Write tests for both Angular and web components
6. **Performance**: Monitor bundle size and loading times

## Additional Resources

- [Angular Elements Guide](https://angular.io/guide/elements)
- [Web Components Best Practices](https://developers.google.com/web/fundamentals/web-components/best-practices)
- [Main Integration Guide](../ANGULAR_INTEGRATION.md)

## Support

For issues or questions:
1. Check the main ANGULAR_INTEGRATION.md guide
2. Review the React component documentation
3. Check browser compatibility
4. Verify all setup steps are completed
