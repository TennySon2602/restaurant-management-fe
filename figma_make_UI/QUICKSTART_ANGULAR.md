# Quick Start: Using Restaurant Components in Angular

This guide will get you up and running with the Restaurant Management Platform web components in your Angular application in under 5 minutes.

## Prerequisites

- Node.js 18+ installed
- Angular CLI installed (`npm install -g @angular/cli`)
- An existing Angular project

## Step 1: Build the Components (2 minutes)

In this React project directory:

```bash
# Install dependencies
npm install

# Build web components
npm run build
```

This creates a `dist` folder with all the components.

## Step 2: Setup Angular Project (2 minutes)

### 2.1 Copy Files

Copy the built components to your Angular project:

```bash
# Create assets directory
mkdir -p /path/to/your-angular-app/src/assets/restaurant

# Copy all built files
cp -r dist/* /path/to/your-angular-app/src/assets/restaurant/
```

### 2.2 Update angular.json

Add these lines to your `angular.json`:

```json
{
  "projects": {
    "your-project": {
      "architect": {
        "build": {
          "options": {
            "scripts": [
              "src/assets/restaurant/index.js"
            ],
            "styles": [
              "src/assets/restaurant/style.css"
            ]
          }
        }
      }
    }
  }
}
```

### 2.3 Enable Custom Elements

**For Angular Modules:**

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // ... rest of your config
})
export class AppModule { }
```

**For Standalone Components:**

```typescript
// app.component.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // ... rest of your config
})
export class AppComponent { }
```

## Step 3: Use the Components (1 minute)

Now use the web components in your Angular templates:

```html
<!-- Full Restaurant App -->
<restaurant-app></restaurant-app>

<!-- Or use individual components -->
<customer-booking theme="light"></customer-booking>

<staff-pos staff-id="123" staff-name="John Doe"></staff-pos>

<manager-dashboard></manager-dashboard>
```

## Complete Example

Here's a complete Angular component example:

```typescript
// src/app/restaurant/restaurant.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="restaurant-wrapper">
      <h1>Restaurant Management</h1>
      
      <!-- Tab Navigation -->
      <div class="tabs">
        <button 
          *ngFor="let tab of tabs"
          (click)="activeTab = tab.id"
          [class.active]="activeTab === tab.id">
          {{ tab.label }}
        </button>
      </div>

      <!-- Component Display -->
      <div class="component-container">
        <customer-booking 
          *ngIf="activeTab === 'customer'"
          [attr.theme]="theme">
        </customer-booking>

        <staff-pos 
          *ngIf="activeTab === 'staff'"
          [attr.staff-id]="staffId"
          [attr.staff-name]="staffName">
        </staff-pos>

        <manager-dashboard 
          *ngIf="activeTab === 'manager'">
        </manager-dashboard>
      </div>
    </div>
  `,
  styles: [`
    .restaurant-wrapper {
      width: 100%;
      min-height: 100vh;
    }

    .tabs {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #2D2D2D;
    }

    .tabs button {
      padding: 0.75rem 1.5rem;
      background: transparent;
      color: white;
      border: 2px solid transparent;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .tabs button:hover {
      background: rgba(255, 107, 53, 0.1);
      border-color: #FF6B35;
    }

    .tabs button.active {
      background: #FF6B35;
      border-color: #FF6B35;
    }

    .component-container {
      width: 100%;
      min-height: calc(100vh - 80px);
    }
  `]
})
export class RestaurantComponent {
  activeTab = 'customer';
  theme: 'light' | 'dark' = 'light';
  staffId = 'emp-001';
  staffName = 'John Doe';

  tabs = [
    { id: 'customer', label: 'Customer Booking' },
    { id: 'staff', label: 'Staff POS' },
    { id: 'manager', label: 'Manager Dashboard' }
  ];
}
```

## Routing Setup (Optional)

If you want to use Angular routing with the components:

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { CustomerPageComponent } from './pages/customer-page.component';
import { StaffPageComponent } from './pages/staff-page.component';
import { ManagerPageComponent } from './pages/manager-page.component';

export const routes: Routes = [
  { 
    path: 'customer', 
    component: CustomerPageComponent 
  },
  { 
    path: 'staff', 
    component: StaffPageComponent 
  },
  { 
    path: 'manager', 
    component: ManagerPageComponent 
  },
  { 
    path: '', 
    redirectTo: '/customer', 
    pathMatch: 'full' 
  }
];
```

Each page component would contain the respective web component:

```typescript
// customer-page.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<customer-booking theme="light"></customer-booking>'
})
export class CustomerPageComponent {}
```

## Troubleshooting

### "Element not defined" error
- Make sure the script is loaded before components are rendered
- Check that the path in `angular.json` is correct
- Verify the script is in your assets folder

### Styles not working
- Ensure the CSS file is in the `styles` array in `angular.json`
- Check browser console for 404 errors
- Verify file paths are correct

### TypeScript errors
- Add `"src/assets/restaurant/types.d.ts"` to your `tsconfig.json` includes
- Or add `CUSTOM_ELEMENTS_SCHEMA` to silence the warnings

## Next Steps

- Read the full [ANGULAR_INTEGRATION.md](./ANGULAR_INTEGRATION.md) for advanced usage
- Customize component styling with CSS variables
- Add event listeners for component communication
- Implement authentication integration

## Available Components

| Component | Description | Use Case |
|-----------|-------------|----------|
| `<restaurant-app>` | Complete platform | All-in-one solution |
| `<customer-booking>` | Booking interface | Customer-facing app |
| `<staff-pos>` | Point of Sale | Staff order management |
| `<manager-dashboard>` | Analytics & management | Restaurant operations |

## Support

For more detailed documentation, see:
- [ANGULAR_INTEGRATION.md](./ANGULAR_INTEGRATION.md) - Complete integration guide
- [Web Components API](./src/web-components/README.md) - Component API reference

Happy coding! 🚀
