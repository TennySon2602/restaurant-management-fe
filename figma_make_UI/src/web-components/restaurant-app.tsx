import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app/App';

/**
 * Web Component wrapper for the Restaurant Management Platform
 * This allows the React app to be used in Angular or any other framework
 * 
 * Usage in Angular:
 * 1. Include this script in your Angular index.html or angular.json
 * 2. Add CUSTOM_ELEMENTS_SCHEMA to your Angular module
 * 3. Use in templates: <restaurant-app></restaurant-app>
 */
class RestaurantApp extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  constructor() {
    super();
    // Create a shadow DOM for style encapsulation
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Create mount point
    this.mountPoint = document.createElement('div');
    this.mountPoint.style.width = '100%';
    this.mountPoint.style.height = '100%';
    
    // Add all required stylesheets to shadow DOM
    const linkElements = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    linkElements.forEach(link => {
      const clonedLink = link.cloneNode(true) as HTMLLinkElement;
      this.shadowRoot!.appendChild(clonedLink);
    });

    // Add style tags
    const styleElements = Array.from(document.querySelectorAll('style'));
    styleElements.forEach(style => {
      const clonedStyle = style.cloneNode(true) as HTMLStyleElement;
      this.shadowRoot!.appendChild(clonedStyle);
    });

    this.shadowRoot!.appendChild(this.mountPoint);

    // Mount React app
    this.root = ReactDOM.createRoot(this.mountPoint);
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    // Cleanup React app
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

// Register the custom element
if (!customElements.get('restaurant-app')) {
  customElements.define('restaurant-app', RestaurantApp);
}

export default RestaurantApp;
