/**
 * Example Angular Component using Restaurant Web Components
 * 
 * Place this file in your Angular project and customize as needed.
 * This demonstrates best practices for integrating the web components.
 */

import { 
  Component, 
  CUSTOM_ELEMENTS_SCHEMA, 
  OnInit, 
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantService, RestaurantView } from '../services/restaurant.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="restaurant-container">
      <!-- Header -->
      <header class="header">
        <div class="header-content">
          <h1>Restaurant Management Platform</h1>
          <div class="header-actions">
            <button 
              class="theme-toggle"
              (click)="toggleTheme()"
              title="Toggle theme">
              {{ (theme$ | async) === 'light' ? '🌙' : '☀️' }}
            </button>
          </div>
        </div>
      </header>

      <!-- Navigation Tabs -->
      <nav class="nav-tabs">
        <button 
          *ngFor="let view of views"
          [class.active]="(currentView$ | async) === view.id"
          (click)="setView(view.id)"
          class="nav-tab">
          {{ view.label }}
        </button>
      </nav>

      <!-- Staff Info Form (shown only for staff view) -->
      <div 
        *ngIf="(currentView$ | async) === 'staff'" 
        class="staff-info-form">
        <input 
          [(ngModel)]="staffId"
          (ngModelChange)="updateStaffInfo()"
          placeholder="Staff ID"
          class="input">
        <input 
          [(ngModel)]="staffName"
          (ngModelChange)="updateStaffInfo()"
          placeholder="Staff Name"
          class="input">
      </div>

      <!-- Web Components Container -->
      <main class="main-content">
        <!-- Full App View -->
        <restaurant-app 
          *ngIf="(currentView$ | async) === 'full'"
          #restaurantApp>
        </restaurant-app>

        <!-- Customer Booking View -->
        <customer-booking 
          *ngIf="(currentView$ | async) === 'customer'"
          [attr.theme]="theme$ | async"
          #customerBooking>
        </customer-booking>

        <!-- Staff POS View -->
        <staff-pos 
          *ngIf="(currentView$ | async) === 'staff'"
          [attr.staff-id]="staffId"
          [attr.staff-name]="staffName"
          #staffPos>
        </staff-pos>

        <!-- Manager Dashboard View -->
        <manager-dashboard 
          *ngIf="(currentView$ | async) === 'manager'"
          #managerDashboard>
        </manager-dashboard>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <p>Restaurant Management Platform - Angular Integration</p>
        <p class="status">
          Components Status: 
          <span [class.loaded]="componentsLoaded" [class.loading]="!componentsLoaded">
            {{ componentsLoaded ? '✓ Loaded' : '⌛ Loading...' }}
          </span>
        </p>
      </footer>
    </div>
  `,
  styles: [`
    .restaurant-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: #F5F5F5;
    }

    .header {
      background: #2D2D2D;
      color: white;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 900;
      color: white;
    }

    .header-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .theme-toggle {
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.2s;
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }

    .nav-tabs {
      display: flex;
      gap: 0.5rem;
      padding: 1rem;
      background: white;
      border-bottom: 2px solid #e5e5e5;
      overflow-x: auto;
    }

    .nav-tab {
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: 2px solid transparent;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 700;
      color: #2D2D2D;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .nav-tab:hover {
      background: rgba(255, 107, 53, 0.1);
      border-color: rgba(255, 107, 53, 0.3);
    }

    .nav-tab.active {
      background: #FF6B35;
      border-color: #FF6B35;
      color: white;
    }

    .staff-info-form {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-bottom: 1px solid #e5e5e5;
    }

    .input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 2px solid #e5e5e5;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      transition: border-color 0.2s;
    }

    .input:focus {
      outline: none;
      border-color: #FF6B35;
    }

    .main-content {
      flex: 1;
      width: 100%;
      overflow: auto;
    }

    .footer {
      background: white;
      padding: 1rem;
      text-align: center;
      border-top: 2px solid #e5e5e5;
      font-size: 0.875rem;
      color: #666;
    }

    .footer p {
      margin: 0.25rem 0;
    }

    .status {
      font-weight: 700;
    }

    .status .loaded {
      color: #4CAF50;
    }

    .status .loading {
      color: #FF6B35;
    }

    @media (max-width: 768px) {
      .header h1 {
        font-size: 1.2rem;
      }

      .nav-tabs {
        padding: 0.5rem;
      }

      .nav-tab {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      }

      .staff-info-form {
        flex-direction: column;
      }
    }
  `]
})
export class RestaurantComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('restaurantApp') restaurantApp?: ElementRef;
  @ViewChild('customerBooking') customerBooking?: ElementRef;
  @ViewChild('staffPos') staffPos?: ElementRef;
  @ViewChild('managerDashboard') managerDashboard?: ElementRef;

  // Observables from service
  currentView$ = this.restaurantService.currentView$;
  theme$ = this.restaurantService.theme$;
  staffInfo$ = this.restaurantService.staffInfo$;

  // Local state
  staffId = '';
  staffName = '';
  componentsLoaded = false;

  // Navigation views
  views = [
    { id: 'customer' as RestaurantView, label: '🍽️ Customer Booking' },
    { id: 'staff' as RestaurantView, label: '💼 Staff POS' },
    { id: 'manager' as RestaurantView, label: '📊 Manager Dashboard' },
    { id: 'full' as RestaurantView, label: '🚀 Full App' }
  ];

  private destroy$ = new Subject<void>();

  constructor(
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    // Subscribe to staff info changes
    this.staffInfo$
      .pipe(takeUntil(this.destroy$))
      .subscribe(info => {
        this.staffId = info.staffId;
        this.staffName = info.staffName;
      });

    // Check if components are loaded
    this.checkComponentsStatus();
  }

  async ngAfterViewInit(): Promise<void> {
    // Wait for web components to be defined
    await this.restaurantService.waitForComponents();
    this.componentsLoaded = true;

    // Add any custom event listeners here
    // Example: this.setupEventListeners();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Set the active view
   */
  setView(view: RestaurantView): void {
    this.restaurantService.setView(view);
  }

  /**
   * Toggle theme between light and dark
   */
  toggleTheme(): void {
    this.restaurantService.toggleTheme();
  }

  /**
   * Update staff information
   */
  updateStaffInfo(): void {
    this.restaurantService.setStaffInfo(this.staffId, this.staffName);
  }

  /**
   * Check if web components are loaded
   */
  private checkComponentsStatus(): void {
    this.componentsLoaded = this.restaurantService.areComponentsLoaded();
    
    if (!this.componentsLoaded) {
      // Retry after a short delay
      setTimeout(() => this.checkComponentsStatus(), 100);
    }
  }

  /**
   * Setup custom event listeners (if needed in future)
   */
  private setupEventListeners(): void {
    // Example: Listen to custom events from web components
    // if (this.staffPos) {
    //   this.restaurantService.attachComponentListeners(
    //     this.staffPos,
    //     {
    //       'order-created': (event) => this.onOrderCreated(event),
    //       'table-updated': (event) => this.onTableUpdated(event)
    //     }
    //   );
    // }
  }
}
