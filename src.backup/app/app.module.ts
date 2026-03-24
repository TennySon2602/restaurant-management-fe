import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/loginform/loginform.module').then(
        (m) => m.LoginformModule
      ),
  },
  {
    path: 'registerform',
    loadChildren: () =>
      import('./pages/registerform/registerform.module').then(
        (m) => m.RegisterformModule
      ),
  },
  {
    path: 'customer-home',
    loadChildren: () =>
      import('./pages/customer-home/customer-home.module').then(
        (m) => m.CustomerHomeModule
      ),
  },
  {
    path: 'customer-menu',
    loadChildren: () =>
      import('./pages/customer-menu/customer-menu.module').then(
        (m) => m.CustomerMenuModule
      ),
  },
  {
    path: 'customer-profile',
    loadChildren: () =>
      import('./pages/customer-profile/customer-profile.module').then(
        (m) => m.CustomerProfileModule
      ),
  },
  {
    path: 'staff-payment-history',
    loadChildren: () =>
      import('./pages/staff-payment-history/staff-payment-history.module').then(
        (m) => m.StaffPaymentHistoryModule
      ),
  },
  {
    path: 'staff-shift',
    loadChildren: () =>
      import('./pages/staff-shift/staff-shift.module').then(
        (m) => m.StaffShiftModule
      ),
  },
  {
    path: 'manager-dashboard',
    loadChildren: () =>
      import('./pages/manager-dashboard/manager-dashboard.module').then(
        (m) => m.ManagerDashboardModule
      ),
  },
  {
    path: 'manager-menu',
    loadChildren: () =>
      import('./pages/manager-menu/manager-menu.module').then(
        (m) => m.ManagerMenuModule
      ),
  },
  {
    path: 'manager-tables',
    loadChildren: () =>
      import('./pages/manager-tables/manager-tables.module').then(
        (m) => m.ManagerTablesModule
      ),
  },
  {
    path: 'manager-inventory',
    loadChildren: () =>
      import('./pages/manager-inventory/manager-inventory.module').then(
        (m) => m.ManagerInventoryModule
      ),
  },
  {
    path: 'manager-report',
    loadChildren: () =>
      import('./pages/manager-report/manager-report.module').then(
        (m) => m.ManagerReportModule
      ),
  },
  {
    path: 'customerbooking',
    loadChildren: () =>
      import('./pages/customerbooking/customerbooking.module').then(
        (m) => m.CustomerbookingModule
      ),
  },
  {
    path: 'customer-confirm-booking',
    loadChildren: () =>
      import(
        './pages/customer-confirm-booking/customer-confirm-booking.module'
      ).then((m) => m.CustomerConfirmBookingModule),
  },
  {
    path: 'staff-tables',
    loadChildren: () =>
      import('./pages/staff-tables/staff-tables.module').then(
        (m) => m.StaffTablesModule
      ),
  },
  {
    path: 'staff-table-form',
    loadChildren: () =>
      import('./pages/staff-table-form/staff-table-form.module').then(
        (m) => m.StaffTableFormModule
      ),
  },
  {
    path: 'staff-table-details/:tableId',
    loadChildren: () =>
      import('./pages/staff-table-details/staff-table-details.module').then(
        (m) => m.StaffTableDetailsModule
      ),
  },
  {
    path: 'staff-table-details',
    loadChildren: () =>
      import('./pages/staff-table-details/staff-table-details.module').then(
        (m) => m.StaffTableDetailsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
