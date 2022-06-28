export class CommonMethods {
    //this method visits any page inserted as parameter
    visitPage(pageURL) {
        cy.visit(pageURL);
    };

    //this method will wait and click on any web element inserted as parameter
    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    };

    //this method wll click on an element by text
    clickOnElementByText(webElement, text) {
        cy.get(webElement).should('be.visible').contains(text).click({force: true});
    };

    //this method will type any text into an input web element that is inserted as parameter by index
    typeTextIntoElementByIndex(webElement, index, text) {
        cy.get(webElement).eq(index).should('be.visible').type(text, {force: true});
    };

    //this method will assert if an element is visible
    assertElementIsVisible(webElement) {
        cy.get(webElement).should('be.visible')
    };

    //this method will click on any web element by index inserted as parameters, with force true
    clickOnElementForceTrueByIndex(webElement, index) {
        cy.get(webElement).eq(index).click({force: true});
    };

    //this method will type any text into an input web element that is inserted as parameter
    typeTextIntoElement(webElement, text) {
        cy.get(webElement).should('be.visible').type(text, {force: true});
    };

    //this method gets and checks inside of a web element if it contains the specific text inserted as parameter
    assertElementContainsExpectedText(webElement, text) {
        cy.get(webElement).should('be.visible').contains(text);
    };
}

export const commonMethods = new CommonMethods();
