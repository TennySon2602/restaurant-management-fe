# Restaurant Management Web Components

This directory contains Web Component wrappers for the Restaurant Management Platform React components, enabling use in Angular, Vue, Svelte, or vanilla JavaScript applications.

## Architecture

Each web component wraps a React component using the native Web Components API (Custom Elements + Shadow DOM):

```
┌─────────────────────────────────────┐
│   Angular / Vue / Vanilla JS       │
│                                     │
│   <customer-booking>                │
│   <staff-pos>                       │
│   <manager-dashboard>               │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│   Web Component Wrapper             │
│   (Custom Element)                  │
│                                     │
│   • Shadow DOM                      │
│   • Attribute handling              │
│   • Lifecycle management            │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│   React Component                   │
│   (Original Implementation)         │
│                                     │
│   • Hooks                           │
│   • State management                │
│   • React Router                    │
└─────────────────────────────────────┘
```

## Files

### Core Components

- **`restaurant-app.tsx`** - Full application wrapper
- **`customer-booking.tsx`** - Customer booking interface
- **`staff-pos.tsx`** - Staff POS interface
- **`manager-dashboard.tsx`** - Manager dashboard

### Supporting Files

- **`index.ts`** - Main export file that registers all components
- **`types.d.ts`** - TypeScript type definitions
- **`README.md`** - This file

## Component API

### `<restaurant-app>`

The complete restaurant management platform.

```html
<restaurant-app></restaurant-app>
```

**No attributes** - Self-contained full application

---

### `<customer-booking>`

Customer-facing booking interface.

```html
<customer-booking theme="light"></customer-booking>
```

**Attributes:**
- `theme` (optional): `"light"` | `"dark"` - Theme preference

**Example:**
```typescript
// Angular
<customer-booking [attr.theme]="userTheme"></customer-booking>

// Vue
<customer-booking :theme="userTheme"></customer-booking>

// Vanilla JS
const booking = document.createElement('customer-booking');
booking.setAttribute('theme', 'dark');
document.body.appendChild(booking);
```

---

### `<staff-pos>`

Point of Sale interface for staff.

```html
<staff-pos staff-id="123" staff-name="John Doe"></staff-pos>
```

**Attributes:**
- `staff-id` (optional): Staff member identifier
- `staff-name` (optional): Display name for staff member

**Example:**
```typescript
// Angular
<staff-pos 
  [attr.staff-id]="currentStaff.id" 
  [attr.staff-name]="currentStaff.name">
</staff-pos>

// Vue
<staff-pos 
  :staff-id="currentStaff.id" 
  :staff-name="currentStaff.name">
</staff-pos>

// Vanilla JS
const pos = document.createElement('staff-pos');
pos.setAttribute('staff-id', '123');
pos.setAttribute('staff-name', 'John Doe');
document.body.appendChild(pos);
```

---

### `<manager-dashboard>`

Management interface with analytics and controls.

```html
<manager-dashboard></manager-dashboard>
```

**No attributes** - Self-contained management interface

---

## Implementation Details

### Shadow DOM

All components use Shadow DOM for:
- **Style encapsulation** - Prevents CSS conflicts
- **DOM encapsulation** - Isolates component internals
- **Composition** - Better component boundaries

### Lifecycle

Each component implements these lifecycle callbacks:

```typescript
class CustomComponent extends HTMLElement {
  // Called when element is added to DOM
  connectedCallback() {
    // Mount React component
  }

  // Called when attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    // Update React component props
  }

  // Called when element is removed from DOM
  disconnectedCallback() {
    // Unmount React component
  }
}
```

### React Integration

Components use `ReactDOM.createRoot()` for mounting:

```typescript
private render() {
  if (!this.root) {
    this.root = ReactDOM.createRoot(this.mountPoint);
  }

  this.root.render(
    <React.StrictMode>
      <YourComponent {...props} />
    </React.StrictMode>
  );
}
```

## Building

Build all web components:

```bash
npm run build
```

This creates:
```
dist/
├── index.js              # Main entry point
├── index.umd.js          # UMD bundle
├── restaurant-app.js     # Individual components
├── customer-booking.js
├── staff-pos.js
├── manager-dashboard.js
├── style.css             # Bundled styles
└── assets/               # Images, fonts, etc.
```

## Development

### Local Development

The web components work with the existing React development server:

```bash
npm run dev
```

Then test the main React app normally.

### Testing Web Components

Create a test HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Web Component Test</title>
  <link rel="stylesheet" href="/dist/style.css">
</head>
<body>
  <h1>Restaurant Components Test</h1>
  
  <customer-booking theme="light"></customer-booking>
  
  <script type="module" src="/dist/index.js"></script>
</body>
</html>
```

## Framework Integration Examples

### Angular

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  template: '<customer-booking></customer-booking>',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RestaurantComponent {}
```

### Vue 3

```vue
<template>
  <customer-booking :theme="theme"></customer-booking>
</template>

<script setup>
import { ref } from 'vue';

// Web components are automatically recognized
const theme = ref('light');
</script>
```

### Svelte

```svelte
<script>
  let theme = 'light';
</script>

<customer-booking {theme}></customer-booking>
```

### Vanilla JavaScript

```javascript
// Import the components
import './dist/index.js';

// Use them
const app = document.createElement('restaurant-app');
document.body.appendChild(app);

// With attributes
const booking = document.createElement('customer-booking');
booking.setAttribute('theme', 'dark');
document.body.appendChild(booking);
```

## Advanced Usage

### Custom Events (Future Enhancement)

To add custom events for component communication:

```typescript
// In web component
class StaffPOSElement extends HTMLElement {
  private emitOrderCreated(order: Order) {
    this.dispatchEvent(new CustomEvent('order-created', {
      detail: order,
      bubbles: true,
      composed: true
    }));
  }
}

// In Angular
<staff-pos (order-created)="onOrderCreated($event)"></staff-pos>
```

### Styling

Override CSS variables:

```css
staff-pos {
  --primary-color: #FF6B35;
  --bg-color: #F5F5F5;
  --text-color: #2D2D2D;
}
```

### Data Binding

For complex data binding, consider using a message bus or state management:

```typescript
// Using localStorage for simple cross-framework state
localStorage.setItem('restaurant-state', JSON.stringify(state));

// Components can listen to storage events
window.addEventListener('storage', (e) => {
  if (e.key === 'restaurant-state') {
    updateComponent(JSON.parse(e.newValue));
  }
});
```

## Performance

### Bundle Size

| Component | Size (gzipped) |
|-----------|----------------|
| Full App | ~150KB |
| Customer Booking | ~80KB |
| Staff POS | ~90KB |
| Manager Dashboard | ~100KB |

### Optimization Tips

1. **Lazy Load**: Only load components when needed
2. **Code Split**: Use individual component bundles
3. **Cache**: Set proper cache headers for production
4. **Preload**: Use `<link rel="preload">` for critical components

## Browser Support

- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ❌ IE 11 (not supported)

Requirements:
- Custom Elements v1
- Shadow DOM v1
- ES2020

## Troubleshooting

### Component not rendering

**Cause**: Script not loaded or custom elements not supported

**Solution**: 
- Check browser console for errors
- Verify script tag is before component usage
- Check browser compatibility

### Styles not applied

**Cause**: CSS not loaded or shadow DOM issue

**Solution**:
- Ensure CSS file is included
- Check that fonts and assets are accessible
- Verify shadow DOM support

### TypeScript errors

**Cause**: Component types not recognized

**Solution**:
- Add `types.d.ts` to your tsconfig
- Add `CUSTOM_ELEMENTS_SCHEMA` to suppress warnings
- Use `any` type as fallback

## Migration from React

If you're migrating from the React version:

1. **No code changes needed** - Components work identically
2. **Same props/attributes** - Just use kebab-case for attributes
3. **Same behavior** - All features preserved

## Contributing

When adding new web components:

1. Create the wrapper in this directory
2. Export it in `index.ts`
3. Add TypeScript definitions in `types.d.ts`
4. Update this README
5. Add integration examples
6. Update build configuration

## License

Same as the main Restaurant Management Platform project.
