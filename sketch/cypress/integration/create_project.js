it('should change value of selected', () => {
    cy.visit('http://localhost:3000');
    cy.get('ul').find('a:first')
    .next().click()
    cy.get('#log-wrapper')
    .find('input:first')
    .type('mycypress@test.com')
    .next().type('mytest')
    .next()
    .click()
    cy.get('#ske-projects-plus')
    .click()
    cy.get('.ske-add-project-input')
    .click()
    .type('newproject' + "{enter}")
    cy.get('#ske-projects-display').should('be.visible')

})