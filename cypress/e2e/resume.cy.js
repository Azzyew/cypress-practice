describe('Resume page', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('host')}/resume`);
  });

  it('contains "Currículo" in the page title', () => {
    cy.title().should('contain', 'Cypress Practice');
  });

  it('contains "LAISA COSTA" in the title', () => {
    cy.getByDataTest('title').should('contain', 'LAISA COSTA');
  });

  it('contains "FRONTEND DEVELOPER" in the subtitle', () => {
    cy.getByDataTest('subtitle').should('contain', 'FRONTEND DEVELOPER');
  });

  it('contains "SOBRE" in the heading', () => {
    cy.getByDataTest('about').should('contain', 'SOBRE');
  });

  it('contains "CONTATO" in the heading', () => {
    cy.getByDataTest('contact').should('contain', 'CONTATO');
  });

  it('contains "EXPERIÊNCIA" in the heading', () => {
    cy.getByDataTest('experience').should('contain', 'EXPERIÊNCIA');
  });

  it('contains "QUALIFICAÇÕES" in the heading', () => {
    cy.getByDataTest('qualification').should('contain', 'QUALIFICAÇÕES');
  });

  it('contains "HABILIDADES" in the heading', () => {
    cy.getByDataTest('skills').should('contain', 'HABILIDADES');
  });
});