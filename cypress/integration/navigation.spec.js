describe("Navigation", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
  });

  it("Should vist root", () => {
    cy.visit("/");
  });

  it('Should navigate to Tuesday', () => {
    cy.contains('[data-testid=day]', 'Tuesday')
      .click()
      .should('have.class', 'day-list__item--selected');
  });

  it('Should book an interview', () => {
    cy.visit('/');
    cy.contains('[data-testid=day]', 'Tuesday')
      .click()
    cy.contains('[data-testid=appointment]', '1pm')
      .click();
    cy.get('input')
      .type("Lydia Miller-Jones");
    cy.get("[alt='Sylvia Palmer']")
      .click({ multiple: true });
    cy.contains('Save')
      .click()
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it('Should edit an interview', () => {
    cy.visit('/');
    cy.contains('[data-testid=day]', 'Monday')
      .click()
    cy.contains('[data-testid=appointment]', 'Archie Cohen')
      .get("[alt='Edit']")
      .click({force:true});
    cy.get("[data-testid='student-name-input']")
      .clear()
      .type("Lydia Miller-Jones")
    cy.get("[alt='Tori Malcolm']")
      .click({ multiple: true });
    cy.contains('Save')
      .click()
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it('Should delete an interview', () => {
    cy.visit('/');
    cy.contains('[data-testid=appointment]', 'Archie Cohen')
      .get("[alt='Delete']")
      .click({force:true});
    cy.contains('Confirm')
      .click();
    cy.get('article.appointment')
      .contains('12pm')
      .get('main')
      .should('have.class', 'appointment__add')
  });
});