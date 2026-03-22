const APP_URL = 'http://localhost:4200';

describe('Login Flow', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(`${APP_URL}/login`);
  });

  it('shows login page and role options', () => {
    cy.contains('h1', 'Restaurant Management').should('be.visible');
    cy.contains('.role-button', 'Customer').should('have.class', 'active');
    cy.contains('.role-button', 'Staff').should('be.visible');
    cy.contains('.role-button', 'Manager').should('be.visible');
    cy.contains('.credentials-hint', 'Username: customer | Password: customer123').should('be.visible');
  });

  it('shows validation when username/password are empty', () => {
    cy.contains('button', 'Login as customer').click();
    cy.contains('.error-message', 'Please enter username and password').should('be.visible');
  });

  it('shows invalid credentials message', () => {
    cy.get('#username').type('customer');
    cy.get('#password').type('wrong-password');
    cy.contains('button', 'Login as customer').click();

    cy.contains('.error-message', 'Invalid credentials').should('be.visible');
    cy.url().should('include', '/login');
  });

  it('can login as customer and logout', () => {
    cy.get('#username').type('customer');
    cy.get('#password').type('customer123');
    cy.contains('button', 'Login as customer').click();

    cy.url().should('include', '/customer');
    cy.contains('h2', 'Make a Reservation').should('be.visible');

    cy.contains('button', 'Logout').click();
    cy.url().should('include', '/login');
  });

  it('can login as staff and logout', () => {
    cy.contains('.role-button', 'Staff').click();
    cy.get('#username').type('staff');
    cy.get('#password').type('staff123');
    cy.contains('button', 'Login as staff').click();

    cy.url().should('include', '/staff');
    cy.contains('h2', 'Select Table').should('be.visible');

    cy.contains('button', 'Logout').click();
    cy.url().should('include', '/login');
  });

  it('can login as manager and logout', () => {
    cy.contains('.role-button', 'Manager').click();
    cy.get('#username').type('manager');
    cy.get('#password').type('manager123');
    cy.contains('button', 'Login as manager').click();

    cy.url().should('include', '/manager');
    cy.contains('h1', 'Analytics Dashboard').should('be.visible');

    cy.contains('button', 'Logout').click();
    cy.url().should('include', '/login');
  });
});
