import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import ManagerLayout from '../app/components/manager/ManagerLayout';
import ManagerDashboard from '../app/pages/ManagerDashboard';
import ManagerMenu from '../app/components/manager/ManagerMenu';
import ManagerTables from '../app/components/manager/ManagerTables';
import ManagerInventory from '../app/components/manager/ManagerInventory';
import ManagerReports from '../app/components/manager/ManagerReports';
import ManagerDiscounts from '../app/components/manager/ManagerDiscounts';
import ManagerEmployees from '../app/components/manager/ManagerEmployees';

/**
 * Web Component for Manager Dashboard
 * 
 * Usage in Angular:
 * <manager-dashboard></manager-dashboard>
 */
class ManagerDashboardElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.mountPoint.style.width = '100%';
    this.mountPoint.style.minHeight = '100vh';
    
    // Copy stylesheets
    const linkElements = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    linkElements.forEach(link => {
      const clonedLink = link.cloneNode(true) as HTMLLinkElement;
      this.shadowRoot!.appendChild(clonedLink);
    });

    const styleElements = Array.from(document.querySelectorAll('style'));
    styleElements.forEach(style => {
      const clonedStyle = style.cloneNode(true) as HTMLStyleElement;
      this.shadowRoot!.appendChild(clonedStyle);
    });

    this.shadowRoot!.appendChild(this.mountPoint);
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  private render() {
    if (!this.mountPoint) return;

    if (!this.root) {
      this.root = ReactDOM.createRoot(this.mountPoint);
    }

    this.root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/manager" element={<ManagerLayout />}>
              <Route index element={<ManagerDashboard />} />
              <Route path="menu" element={<ManagerMenu />} />
              <Route path="tables" element={<ManagerTables />} />
              <Route path="inventory" element={<ManagerInventory />} />
              <Route path="discounts" element={<ManagerDiscounts />} />
              <Route path="employees" element={<ManagerEmployees />} />
              <Route path="reports" element={<ManagerReports />} />
            </Route>
            <Route path="*" element={<Navigate to="/manager" replace />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

if (!customElements.get('manager-dashboard')) {
  customElements.define('manager-dashboard', ManagerDashboardElement);
}

export default ManagerDashboardElement;
