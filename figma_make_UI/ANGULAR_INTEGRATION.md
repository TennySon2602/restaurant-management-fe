# Angular Integration Guide

This guide explains how to use the Restaurant Management Platform React components in an Angular application using Web Components.

## Overview

The Restaurant Management Platform has been wrapped as Web Components, allowing seamless integration with Angular applications. Each component is self-contained and can be used independently.

## Available Web Components

### 1. `<restaurant-app>`
The complete restaurant management platform with routing and all features.

```html
<restaurant-app></restaurant-app>
```

### 2. `<customer-booking>`
Customer booking interface for table reservations.

```html
<customer-booking theme="light"></customer-booking>
```

**Attributes:**
- `theme`: `"light"` | `"dark"` (optional)

### 3. `<staff-pos>`
Staff Point of Sale interface for order management.

```html
<staff-pos staff-id="123" staff-name="John Doe"></staff-pos>
```

**Attributes:**
- `staff-id`: Staff member identifier (optional)
- `staff-name`: Display name for staff member (optional)

### 4. `<manager-dashboard>`
Manager dashboard with analytics, menu management, and reporting.

```html
<manager-dashboard></manager-dashboard>
```

## Installation Steps

### Step 1: Build the Web Components

In this React project, build the web components:

```bash
npm run build
```

This creates a `dist` folder with the bundled components.

### Step 2: Copy to Angular Project

Copy the built files to your Angular project's assets folder:

```bash
cp -r dist/* /path/to/your-angular-app/src/assets/restaurant-components/
```

### Step 3: Configure Angular

#### 3.1 Update `angular.json`

Add the web component scripts to your `angular.json`:

```json
{
  "projects": {
    "your-app-name": {
      "architect": {
        "build": {
          "options": {
            "scripts": [
              "src/assets/restaurant-components/index.js"
            ],
            "styles": [
              "src/assets/restaurant-components/style.css"
            ]
          }
        }
      }
    }
  }
}
```

#### 3.2 Update Angular Module

Add `CUSTOM_ELEMENTS_SCHEMA` to your Angular module:

```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class AppModule { }
```

For standalone components (Angular 14+):

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  template: `
    <restaurant-app></restaurant-app>
  `
})
export class AppComponent {}
```

### Step 4: Use in Templates

Now you can use the web components in your Angular templates:

```html
<!-- Full application -->
<restaurant-app></restaurant-app>

<!-- Individual components -->
<customer-booking theme="light"></customer-booking>

<staff-pos 
  staff-id="emp-001" 
  staff-name="Jane Smith">
</staff-pos>

<manager-dashboard></manager-dashboard>
```

## TypeScript Support

For better TypeScript support, create a type definition file:

```typescript
// src/types/web-components.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'restaurant-app': any;
    'customer-booking': {
      theme?: 'light' | 'dark';
    };
    'staff-pos': {
      'staff-id'?: string;
      'staff-name'?: string;
    };
    'manager-dashboard': any;
  }
}
```

## Component Communication

### Passing Data to Web Components

Use Angular property binding with attributes:

```html
<staff-pos 
  [attr.staff-id]="currentStaffId" 
  [attr.staff-name]="currentStaffName">
</staff-pos>
```

In your Angular component:

```typescript
export class MyComponent {
  currentStaffId = 'emp-123';
  currentStaffName = 'John Doe';
}
```

### Listening to Events (Future Enhancement)

To emit events from web components to Angular, you can add custom events:

```typescript
// In Angular component
ngAfterViewInit() {
  const staffPos = document.querySelector('staff-pos');
  staffPos?.addEventListener('order-created', (event: any) => {
    console.log('Order created:', event.detail);
  });
}
```

## Styling

The web components use Shadow DOM for style encapsulation. The components come with their own styles (Tailwind CSS), so they won't conflict with your Angular styles.

### Custom Styling

To override styles, you can use CSS custom properties (CSS variables):

```css
/* In your Angular global styles */
staff-pos {
  --primary-color: #FF6B35;
  --background-color: #F5F5F5;
  --text-color: #2D2D2D;
}
```

## Routing Considerations

Each web component manages its own routing internally using React Router. This means:

1. **Nested Routing**: The components handle their own navigation
2. **URL Sync**: Routes are synced with the browser URL
3. **Angular Router**: You may want to use different base paths for each component

### Recommended Setup

Create dedicated routes in Angular for each component:

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { ManagerComponent } from './manager/manager.component';

export const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'manager', component: ManagerComponent },
  { path: '', redirectTo: '/customer', pathMatch: 'full' }
];
```

Then use the web components in each respective Angular component:

```typescript
// customer.component.ts
@Component({
  template: '<customer-booking></customer-booking>',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerComponent {}
```

## Performance Considerations

1. **Lazy Loading**: Consider lazy loading web components only when needed
2. **Code Splitting**: The web components are already code-split by Vite
3. **Caching**: Configure proper cache headers for the built assets

## Troubleshooting

### Components not rendering

1. Verify that `CUSTOM_ELEMENTS_SCHEMA` is added to your module
2. Check that the script is loaded in `angular.json`
3. Open browser console to check for errors

### Styles not working

1. Ensure the CSS file is included in `angular.json`
2. Check that Shadow DOM is supported in your target browsers
3. Verify that font files and assets are accessible

### Routing conflicts

1. Use different base paths for each component
2. Consider using hash routing in React Router
3. Coordinate navigation between Angular and web components

## Example Angular Application

Here's a complete example of an Angular component using the web components:

```typescript
// dashboard.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="dashboard-container">
      <nav>
        <button (click)="selectedView = 'customer'">Customer</button>
        <button (click)="selectedView = 'staff'">Staff</button>
        <button (click)="selectedView = 'manager'">Manager</button>
      </nav>

      <div class="content">
        @switch (selectedView) {
          @case ('customer') {
            <customer-booking [attr.theme]="theme"></customer-booking>
          }
          @case ('staff') {
            <staff-pos 
              [attr.staff-id]="staffId" 
              [attr.staff-name]="staffName">
            </staff-pos>
          }
          @case ('manager') {
            <manager-dashboard></manager-dashboard>
          }
        }
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    
    nav {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #2D2D2D;
    }
    
    nav button {
      padding: 0.5rem 1rem;
      background: #FF6B35;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    
    .content {
      flex: 1;
      overflow: auto;
    }
  `]
})
export class DashboardComponent {
  selectedView: 'customer' | 'staff' | 'manager' = 'customer';
  theme: 'light' | 'dark' = 'light';
  staffId = 'emp-001';
  staffName = 'John Doe';
}
```

## Browser Support

The web components support all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Shadow DOM and Custom Elements are required features.

## Additional Resources

- [Web Components Documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Angular Custom Elements](https://angular.io/guide/elements)
- [React Router Documentation](https://reactrouter.com/)

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify all setup steps are completed
3. Ensure proper CORS configuration if loading from different origins
