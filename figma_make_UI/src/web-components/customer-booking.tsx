import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import CustomerBooking from '../app/pages/CustomerBooking';

/**
 * Web Component for Customer Booking Interface
 * 
 * Usage in Angular:
 * <customer-booking></customer-booking>
 * 
 * Attributes:
 * - theme: 'light' | 'dark' (optional)
 */
class CustomerBookingElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  static get observedAttributes() {
    return ['theme'];
  }

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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
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

    const theme = this.getAttribute('theme') || 'light';

    this.root.render(
      <React.StrictMode>
        <div data-theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/customer" element={<CustomerBooking />} />
              <Route path="*" element={<Navigate to="/customer" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </React.StrictMode>
    );
  }
}

if (!customElements.get('customer-booking')) {
  customElements.define('customer-booking', CustomerBookingElement);
}

export default CustomerBookingElement;
