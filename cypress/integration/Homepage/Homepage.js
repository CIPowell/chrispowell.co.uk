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

When('I click on the link with the text {string}', (linktext) => {
    cy.contains('nav a', linktext).click();
});

Then ('I should go to a page with the title {string}', (title) => {
    cy.get('section h1').should('contain', title);
});

Then ('I should go to a page with the url {string}', (url) => {
    cy.location('pathname').should('eq', url);
});