it('blur_test', () => {
 cy.visit('http://localhost:3000');
 cy.get('ul').find('a:first')
 .next().click()
 cy.get('#log-wrapper')
 .find('input:first')
 .type('cypress@testing.com')
 .next().type('testme')
 .next().click()
 cy.get('#ske-projects-display').find('div:first').click()
 cy.get(".shape_699:first").click({ force: true });
 cy.get('#att-blur').check()
 cy.get(".shape_699:first").should("have.css", "filter").and("match", /blur\(4px\)/)
})