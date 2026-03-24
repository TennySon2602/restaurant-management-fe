# Restaurant Management Platform

A modern UI/UX system for restaurant management supporting three user types: Customer, Service Staff (POS), and Manager.

## Design Principles

- **Minimal Screens**: Reduce navigation by consolidating related functions into unified workspaces
- **Fast Workflows**: Touch-friendly elements and quick actions for efficient operation
- **Clean POS Interface**: Modern card layouts with soft shadows and clear visual hierarchy

## Color Palette

- **Primary**: Warm Orange (#FF6B35)
- **Secondary**: Dark Charcoal (#2D2D2D)
- **Background**: Light Neutral (#F5F5F5)
- **Status Colors**:
  - Available: #4CAF50 (Green)
  - Occupied: #F44336 (Red)
  - Reserved: #FFC107 (Yellow)
  - Maintenance: #9E9E9E (Gray)

## User Interfaces

### 1. Customer Interface (Mobile-First)
**Total Screens**: 4

- **Home**: Restaurant overview, quick reservation, popular dishes, location & hours
- **Menu**: Browse dishes by category with slide-out detail panel
- **Reservations**: Single-step reservation with date, time, guest count, and real-time availability
- **Profile**: User info, reservation history, favorite dishes, quick re-book

### 2. Staff POS Interface (Tablet)
**Total Screens**: 4

- **Tables**: Visual floor plan with color-coded table status, quick actions (open, move, merge tables)
- **Orders**: Unified workspace with category menu, dish grid, and live order panel
- **Payments**: Bill review with itemized breakdown, tax, discounts, and payment method selection
- **Shift**: Performance metrics, recent orders, shift summary, end shift action

### 3. Manager Dashboard (Desktop)
**Total Screens**: 4

- **Dashboard**: KPI cards, revenue trends chart, peak hours analysis, inventory alerts
- **Menu**: Menu item management with availability toggle, category filtering, quick edit/delete
- **Inventory**: Stock level tracking with low-stock alerts, quick stock adjustments
- **Reports**: Analytics with best-selling dishes, revenue charts, export options

## Features

### Customer Features
- Quick table reservations
- Interactive menu browsing
- Reservation history tracking
- Favorite dishes management

### Staff Features
- Real-time table management
- Fast order creation and editing
- Multiple payment methods
- Shift performance tracking

### Manager Features
- Business analytics and KPIs
- Menu and inventory management
- Sales reports and insights
- Data export capabilities

## Navigation

The app uses React Router's Data mode pattern for smooth navigation:
- `/` - Role selector
- `/customer/*` - Customer interface
- `/staff/*` - Staff POS interface
- `/manager/*` - Manager dashboard

## Technology Stack

- React with TypeScript
- React Router for navigation
- Tailwind CSS v4 for styling
- Recharts for data visualization
- Lucide React for icons
