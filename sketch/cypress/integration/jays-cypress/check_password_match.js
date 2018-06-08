it('password_match', () => {
 cy.visit('http://localhost:3000');
 cy.get('#hea-menu').find('li:first')
 .click()
 cy.get('#sig-wrapper').find('input:first').type('cypress@testing.com')
 .next().type('testing')
 .next().type('cypress.com')
 .next().type('testme')
 cy.get('#sig-alert').should('be.visible')
})
