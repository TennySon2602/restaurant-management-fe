import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import StaffLayout from '../app/components/staff/StaffLayout';
import StaffPOS from '../app/pages/StaffPOS';

/**
 * Web Component for Staff POS Interface
 * 
 * Usage in Angular:
 * <staff-pos staff-id="123" staff-name="John Doe"></staff-pos>
 * 
 * Attributes:
 * - staff-id: string (required)
 * - staff-name: string (optional)
 */
class StaffPOSElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  static get observedAttributes() {
    return ['staff-id', 'staff-name'];
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

    const staffId = this.getAttribute('staff-id') || 'default';
    const staffName = this.getAttribute('staff-name') || 'Staff Member';

    this.root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/staff" element={<StaffLayout />}>
              <Route index element={<StaffPOS />} />
            </Route>
            <Route path="*" element={<Navigate to="/staff" replace />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

if (!customElements.get('staff-pos')) {
  customElements.define('staff-pos', StaffPOSElement);
}

export default StaffPOSElement;
