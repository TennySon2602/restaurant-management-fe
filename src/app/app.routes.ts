import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'customer',
    loadComponent: () => import('./pages/customer/customer.component').then(m => m.CustomerComponent)
  },
  {
    path: 'staff',
    loadComponent: () => import('./pages/staff/staff.component').then(m => m.StaffComponent)
  },
  {
    path: 'manager',
    loadComponent: () => import('./pages/manager/manager.component').then(m => m.ManagerComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/manager/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'menu',
        loadComponent: () => import('./pages/manager/menu/menu.component').then(m => m.MenuComponent)
      },
      {
        path: 'tables',
        loadComponent: () => import('./pages/manager/tables/tables.component').then(m => m.TablesComponent)
      },
      {
        path: 'inventory',
        loadComponent: () => import('./pages/manager/inventory/inventory.component').then(m => m.InventoryComponent)
      },
      {
        path: 'discounts',
        loadComponent: () => import('./pages/manager/discounts/discounts.component').then(m => m.DiscountsComponent)
      },
      {
        path: 'employees',
        loadComponent: () => import('./pages/manager/employees/employees.component').then(m => m.EmployeesComponent)
      },
      {
        path: 'reports',
        loadComponent: () => import('./pages/manager/reports/reports.component').then(m => m.ReportsComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
