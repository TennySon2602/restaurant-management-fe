const APP_URL = 'http://localhost:4200';

const loginAsManager = () => {
  cy.clearLocalStorage();
  cy.visit(`${APP_URL}/login`);
  cy.contains('.role-button', 'Manager').click();
  cy.get('#username').type('manager');
  cy.get('#password').type('manager123');
  cy.contains('button', 'Login as manager').click();
  cy.url().should('include', '/manager');
};

describe('Manager Navigation', () => {
  beforeEach(() => {
    loginAsManager();
  });

  it('opens dashboard by default', () => {
    cy.contains('h1', 'Analytics Dashboard').should('be.visible');
  });

  it('navigates through manager sections from sidebar', () => {
    cy.contains('a.nav-link', 'Menu').click();
    cy.url().should('include', '/manager/menu');
    cy.contains('h1', 'Menu Management').should('be.visible');

    cy.contains('a.nav-link', 'Tables').click();
    cy.url().should('include', '/manager/tables');
    cy.contains('h1', 'Table Management').should('be.visible');

    cy.contains('a.nav-link', 'Inventory').click();
    cy.url().should('include', '/manager/inventory');
    cy.contains('h1', 'Inventory Management').should('be.visible');

    cy.contains('a.nav-link', 'Discounts').click();
    cy.url().should('include', '/manager/discounts');
    cy.contains('h1', 'Discount Management').should('be.visible');

    cy.contains('a.nav-link', 'Employees').click();
    cy.url().should('include', '/manager/employees');
    cy.contains('h1', 'Employee Management').should('be.visible');

    cy.contains('a.nav-link', 'Reports').click();
    cy.url().should('include', '/manager/reports');
    cy.contains('h1', 'Reports & Analytics').should('be.visible');
  });

  it('logs out from manager portal', () => {
    cy.contains('button', 'Logout').click();
    cy.url().should('include', '/login');
  });
});
