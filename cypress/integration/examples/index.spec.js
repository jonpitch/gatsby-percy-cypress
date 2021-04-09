/// <reference types="cypress" />

context('Actions', () => {

  it('no percy - works with cypress run and cypress open', () => {
    cy.visit('/');
    cy.get('h1').contains('Congratulations');
  });

  it('percy - crashes with cypress open', () => {
    cy.visit('/');
    cy.get('h1').contains('Congratulations');
    cy.percySnapshot();
  });

});
