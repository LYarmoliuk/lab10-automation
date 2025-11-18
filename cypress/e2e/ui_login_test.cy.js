describe('UI Test - Login', () => {
  it('Successful login', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // ASSERT
    cy.contains('Logout').should('be.visible');
  });
});
