it('redirect to landing page', () => {
    cy.visit('http://localhost:7000');
    cy.get('ul').find('a:first')
    .next().click()
    cy.get('#log-wrapper')
    .find('input:first')
    .type('mycypress@test.com')
    .next().type('mytest')
    .next()
    .click()
    cy.get('#too-logout')
    .click()
    cy.url().should('eq', 'http://localhost:7000/#/')
})