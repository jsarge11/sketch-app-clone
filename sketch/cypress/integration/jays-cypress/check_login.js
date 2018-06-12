it('password_match', () => {
 cy.visit('http://localhost:7000');
 cy.get('ul').find('a:first')
 .click()
 cy.get('#sig-wrapper')
 .find('input:first').type('cypress@testing.com')
 .next().type('testing')
 .next().type('cypress.com')
 .next().type('testme')
 .next().type('testme')
 cy.get('.landing-button').click()
 cy.get('ul').find('a:first')
 .next().click()
 cy.get('#log-wrapper')
 .find('input:first')
 .type('cypress@testing.com')
 .next().type('testme')
 .next()
 .click()
 cy.url().should('eq', 'http://localhost:7000/#/sketchpad')

})