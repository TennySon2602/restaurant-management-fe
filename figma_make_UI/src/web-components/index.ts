/**
 * Web Components Export for Angular Integration
 * 
 * This file exports all React components as Web Components that can be used
 * in Angular or any other framework.
 * 
 * SETUP IN ANGULAR:
 * 
 * 1. Build the web components:
 *    npm run build
 * 
 * 2. Copy the built files to your Angular project's assets folder
 * 
 * 3. Add to angular.json scripts array:
 *    "scripts": [
 *      "src/assets/restaurant-components.js"
 *    ]
 * 
 * 4. In your Angular module, add CUSTOM_ELEMENTS_SCHEMA:
 *    import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 *    
 *    @NgModule({
 *      schemas: [CUSTOM_ELEMENTS_SCHEMA],
 *      ...
 *    })
 * 
 * 5. Use in Angular templates:
 *    <restaurant-app></restaurant-app>
 *    <customer-booking theme="light"></customer-booking>
 *    <staff-pos staff-id="123" staff-name="John Doe"></staff-pos>
 *    <manager-dashboard></manager-dashboard>
 * 
 * AVAILABLE WEB COMPONENTS:
 * 
 * - <restaurant-app>
 *   Full restaurant management platform with all features
 * 
 * - <customer-booking>
 *   Customer booking interface
 *   Attributes: theme="light|dark"
 * 
 * - <staff-pos>
 *   Staff POS interface
 *   Attributes: staff-id="string", staff-name="string"
 * 
 * - <manager-dashboard>
 *   Manager dashboard with all management tools
 */

// Import all web components
import './restaurant-app';
import './customer-booking';
import './staff-pos';
import './manager-dashboard';

// Export for direct imports if needed
export { default as RestaurantApp } from './restaurant-app';
export { default as CustomerBooking } from './customer-booking';
export { default as StaffPOS } from './staff-pos';
export { default as ManagerDashboard } from './manager-dashboard';

// Type declarations for TypeScript usage in Angular
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'restaurant-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'customer-booking': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        theme?: 'light' | 'dark';
      }, HTMLElement>;
      'staff-pos': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'staff-id'?: string;
        'staff-name'?: string;
      }, HTMLElement>;
      'manager-dashboard': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
