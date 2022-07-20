describe("Navigation", () => {
  it("Should vist root", () => {
    cy.visit("/");
  });

  it('Should navigate to Tuesday', () => {
    cy.visit('/');
    cy.contains('li', 'Tuesday')
    .click()
    .should('have.css', 'background-color', 'rgb(242, 242, 242)')
  })
});