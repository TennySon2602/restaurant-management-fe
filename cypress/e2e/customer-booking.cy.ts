const APP_URL = 'http://localhost:4200';

const loginAsCustomer = () => {
  cy.clearLocalStorage();
  cy.visit(`${APP_URL}/login`);
  cy.get('#username').type('customer');
  cy.get('#password').type('customer123');
  cy.contains('button', 'Login as customer').click();
  cy.url().should('include', '/customer');
};

describe('Customer Booking', () => {
  beforeEach(() => {
    loginAsCustomer();
  });

  it('requires at least one table before reservation submit', () => {
    cy.get('#name').type('Test Customer');
    cy.get('#phone').type('0901234567');
    cy.get('#time').type('19:00');

    cy.contains('button', 'Confirm Reservation').click();
    cy.contains('.error-message', 'Please select at least one table').should('be.visible');
  });

  it('shows large-group warning when guest count is over 6', () => {
    for (let i = 0; i < 5; i += 1) {
      cy.get('.guest-counter .counter-controls .counter-btn').last().click();
    }

    cy.contains('.warning', 'Large group detected').should('be.visible');
  });

  it('creates reservation successfully with valid form data', () => {
    cy.get('.table-selection .table-button').first().click();

    cy.get('#name').type('Nguyen Van A');
    cy.get('#phone').type('0901234567');
    cy.get('#time').type('18:30');
    cy.get('#notes').type('Window seat please');

    cy.contains('button', 'Confirm Reservation').click();

    cy.contains('.success-message', 'Reservation Confirmed!').should('be.visible');
    cy.contains('.success-message', "We'll see you on").should('be.visible');
  });
});
