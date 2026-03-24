/**
 * TypeScript type definitions for Restaurant Management Web Components
 * Use this file in your Angular project for type safety
 */

export interface RestaurantAppElement extends HTMLElement {}

export interface CustomerBookingElement extends HTMLElement {
  theme?: 'light' | 'dark';
}

export interface StaffPOSElement extends HTMLElement {
  'staff-id'?: string;
  'staff-name'?: string;
}

export interface ManagerDashboardElement extends HTMLElement {}

declare global {
  interface HTMLElementTagNameMap {
    'restaurant-app': RestaurantAppElement;
    'customer-booking': CustomerBookingElement;
    'staff-pos': StaffPOSElement;
    'manager-dashboard': ManagerDashboardElement;
  }
}

// Angular template type support
declare module '@angular/core' {
  interface ElementRef {
    nativeElement: HTMLElement | RestaurantAppElement | CustomerBookingElement | StaffPOSElement | ManagerDashboardElement;
  }
}
