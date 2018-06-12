it('opacity_test', () => {
 cy.visit('http://localhost:7000');
 cy.get('ul').find('a:first')
 .next().click()
 cy.get('#log-wrapper')
 .find('input:first')
 .type('cypress@testing.com')
 .next().type('testme')
 .next().click()
 cy.get('#ske-projects-display').find('div:first').click()
 cy.get(".shape_699:first").click({ force: true });
 cy.get('#att-opacity').type(`{backspace}45{enter}`)
 cy.get(".shape_699:first").should("have.css", "opacity").and("match", /.45/)
})