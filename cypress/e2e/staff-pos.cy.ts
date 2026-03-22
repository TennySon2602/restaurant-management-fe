const APP_URL = 'http://localhost:4200';

const loginAsStaff = () => {
  cy.clearLocalStorage();
  cy.visit(`${APP_URL}/login`);
  cy.contains('.role-button', 'Staff').click();
  cy.get('#username').type('staff');
  cy.get('#password').type('staff123');
  cy.contains('button', 'Login as staff').click();
  cy.url().should('include', '/staff');
};

describe('Staff POS', () => {
  beforeEach(() => {
    loginAsStaff();
  });

  it('shows placeholder before selecting any table', () => {
    cy.contains('h3', 'Select a table to start').should('be.visible');
  });

  it('can select table, add menu item, and submit order', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('windowAlert');
    });

    cy.get('.tables-grid .table-card').first().click();
    cy.contains('h2', 'Menu').should('be.visible');

    cy.get('.menu-items .menu-item').first().click();
    cy.contains('.order-items .order-item h4', 'Phở Bò').should('be.visible');
    cy.get('.submit-order').should('not.be.disabled').click();

    cy.get('@windowAlert').should('have.been.calledWith', 'Order submitted successfully!');
    cy.contains('h3', 'Select a table to start').should('be.visible');
  });

  it('shows merge tables alert', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('windowAlert');
    });

    cy.contains('button', 'Merge Tables').click();
    cy.get('@windowAlert').should('have.been.calledWith', 'Table merging feature - Select multiple tables to merge for large groups');
  });
});
