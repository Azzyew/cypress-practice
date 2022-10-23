describe('Resume page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('contains "Currículo" in the page title', () => {
    cy.title().should('contain', 'Currículo');
  });

  it('contains "LAISA COSTA" in the title', () => {
    cy.getByDataTest('title').should('contain', 'LAISA COSTA');
  });

  it('contains "FRONTEND DEVELOPER" in the title', () => {
    cy.getByDataTest('subtitle').should('contain', 'FRONTEND DEVELOPER');
  });
});