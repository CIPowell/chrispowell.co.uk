import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I visit {string}', (url) => {
    cy.request({ url, failOnStatusCode: false }).as('request');
});

Then('I should get a {int} status code', (targetCode) =>{
    cy.get('@request').should((response) => {
        expect(response.status).to.equal(targetCode)
    })
});