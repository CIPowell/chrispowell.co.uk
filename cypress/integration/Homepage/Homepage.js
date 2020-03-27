import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I am on the Homepage', () => {
    cy.visit('');
});

Then('there should be {int} {string} element', (quantity, tag) => {
    cy.get(tag).should('have.length', quantity);
});

Then('the first {string} element should contain {string}', (tag, text) => {
    cy.get(tag).should('contain', text);
});
