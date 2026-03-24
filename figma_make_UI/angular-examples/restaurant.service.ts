/**
 * Example Angular Service for Restaurant Web Components
 * 
 * Place this file in your Angular project at:
 * src/app/services/restaurant.service.ts
 * 
 * This service provides a typed interface for interacting with
 * the Restaurant Management web components from Angular.
 */

import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Types for web component attributes
export interface StaffPOSAttributes {
  staffId: string;
  staffName: string;
}

export interface CustomerBookingAttributes {
  theme: 'light' | 'dark';
}

export type RestaurantView = 'customer' | 'staff' | 'manager' | 'full';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  // Current active view
  private currentViewSubject = new BehaviorSubject<RestaurantView>('customer');
  public currentView$ = this.currentViewSubject.asObservable();

  // Staff information
  private staffInfoSubject = new BehaviorSubject<StaffPOSAttributes>({
    staffId: '',
    staffName: ''
  });
  public staffInfo$ = this.staffInfoSubject.asObservable();

  // Theme preference
  private themeSubject = new BehaviorSubject<'light' | 'dark'>('light');
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    // Load preferences from localStorage
    this.loadPreferences();
  }

  /**
   * Set the current view
   */
  setView(view: RestaurantView): void {
    this.currentViewSubject.next(view);
    localStorage.setItem('restaurant_view', view);
  }

  /**
   * Get the current view
   */
  getCurrentView(): RestaurantView {
    return this.currentViewSubject.value;
  }

  /**
   * Set staff information for the POS interface
   */
  setStaffInfo(staffId: string, staffName: string): void {
    const staffInfo = { staffId, staffName };
    this.staffInfoSubject.next(staffInfo);
    localStorage.setItem('restaurant_staff', JSON.stringify(staffInfo));
  }

  /**
   * Get current staff information
   */
  getStaffInfo(): StaffPOSAttributes {
    return this.staffInfoSubject.value;
  }

  /**
   * Set theme preference
   */
  setTheme(theme: 'light' | 'dark'): void {
    this.themeSubject.next(theme);
    localStorage.setItem('restaurant_theme', theme);
  }

  /**
   * Get current theme
   */
  getTheme(): 'light' | 'dark' {
    return this.themeSubject.value;
  }

  /**
   * Toggle between light and dark theme
   */
  toggleTheme(): void {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Update web component attributes dynamically
   */
  updateComponentAttributes(
    elementRef: ElementRef,
    attributes: Record<string, string>
  ): void {
    const element = elementRef.nativeElement;
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  /**
   * Get a reference to a web component and add event listeners
   */
  attachComponentListeners(
    elementRef: ElementRef,
    listeners: Record<string, (event: Event) => void>
  ): void {
    const element = elementRef.nativeElement;
    Object.entries(listeners).forEach(([eventName, handler]) => {
      element.addEventListener(eventName, handler);
    });
  }

  /**
   * Remove event listeners from a web component
   */
  detachComponentListeners(
    elementRef: ElementRef,
    listeners: Record<string, (event: Event) => void>
  ): void {
    const element = elementRef.nativeElement;
    Object.entries(listeners).forEach(([eventName, handler]) => {
      element.removeEventListener(eventName, handler);
    });
  }

  /**
   * Load saved preferences from localStorage
   */
  private loadPreferences(): void {
    // Load view
    const savedView = localStorage.getItem('restaurant_view') as RestaurantView;
    if (savedView) {
      this.currentViewSubject.next(savedView);
    }

    // Load staff info
    const savedStaff = localStorage.getItem('restaurant_staff');
    if (savedStaff) {
      try {
        const staffInfo = JSON.parse(savedStaff);
        this.staffInfoSubject.next(staffInfo);
      } catch (e) {
        console.error('Error parsing staff info:', e);
      }
    }

    // Load theme
    const savedTheme = localStorage.getItem('restaurant_theme') as 'light' | 'dark';
    if (savedTheme) {
      this.themeSubject.next(savedTheme);
    }
  }

  /**
   * Clear all saved preferences
   */
  clearPreferences(): void {
    localStorage.removeItem('restaurant_view');
    localStorage.removeItem('restaurant_staff');
    localStorage.removeItem('restaurant_theme');
    
    this.currentViewSubject.next('customer');
    this.staffInfoSubject.next({ staffId: '', staffName: '' });
    this.themeSubject.next('light');
  }

  /**
   * Check if web components are loaded and available
   */
  areComponentsLoaded(): boolean {
    return !!(
      customElements.get('restaurant-app') &&
      customElements.get('customer-booking') &&
      customElements.get('staff-pos') &&
      customElements.get('manager-dashboard')
    );
  }

  /**
   * Wait for web components to be defined
   */
  async waitForComponents(): Promise<void> {
    await Promise.all([
      customElements.whenDefined('restaurant-app'),
      customElements.whenDefined('customer-booking'),
      customElements.whenDefined('staff-pos'),
      customElements.whenDefined('manager-dashboard'),
    ]);
  }
}
