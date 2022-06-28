import {commonMethods} from "../common/CommonMethods";

export class SurveyPage {
    clickOnToSurveyButton() {
        commonMethods.clickOnElement('.MuiGrid-grid-sm-5 button');
    };

    clickOnAddButton() {
        commonMethods.clickOnElementForceTrueByIndex('[data-testid="AddIcon"]', 0);
    };

    selectTypeOfQuestion(typeOfQuestion) {
        commonMethods.clickOnElementByText('div[class="MuiGrid-root tss-fil0uv-customMenuItem mui-cache-rfnosa"]', typeOfQuestion);
    };

    typeYourQuestion(text) {
        commonMethods.typeTextIntoElement('[aria-label="Basic question header input"]', text);
    };

    selectRandomised() {
        commonMethods.clickOnElement('.MuiGrid-root .mui-cache-1t969rj');
        commonMethods.clickOnElement('[data-testid="select-menu-item-1"]');
    };

    typeOption(index, text) {
        commonMethods.typeTextIntoElementByIndex('[aria-label="Basic question response option"]', index, text);
    };

    addOptions() {
        this.typeOption(0, 'Pizza');
        this.typeOption(1, 'Burger');
        this.typeOption(2, 'Fries');
        this.typeOption(3, 'Soup');
        this.typeOption(4, 'Salad');
        this.typeOption(5, 'Pasta');
        this.typeOption(6, 'Fish');
    }

    checkNoneOfThese() {
        commonMethods.clickOnElementForceTrueByIndex('[data-testid="CheckBoxOutlineBlankIcon"]', 3);
    }

    add5Responses() {
        commonMethods.clickOnElement('[aria-label="Add response"]');
        commonMethods.clickOnElement('[aria-label="Add response"]');
        commonMethods.clickOnElement('[aria-label="Add response"]');
        commonMethods.clickOnElement('[aria-label="Add response"]');
        commonMethods.clickOnElement('[aria-label="Add response"]');
    };

    pinThirdOption() {
        commonMethods.clickOnElementForceTrueByIndex('[data-testid="MoreHorizIcon"]', 2);
        commonMethods.clickOnElementByText('ul:nth-child(1) > div:nth-child(2)', 'Pin response');
    };

    pinSeventhOption() {
        commonMethods.clickOnElementForceTrueByIndex('[data-testid="MoreHorizIcon"]', 6);
        commonMethods.clickOnElementByText('ul:nth-child(1) > div:nth-child(2)', 'Pin response');
    };

    assertPins() {
        commonMethods.assertElementIsVisible('.MuiList-root li:nth-child(3) [aria-label="Unpin response option"]');
        commonMethods.assertElementIsVisible('.MuiList-root li:nth-child(7) [aria-label="Unpin response option"]');
    };

    typeYourQuestionMatrix(text) {
        commonMethods.typeTextIntoElement('.public-DraftStyleDefault-block', text);
    };

    selectRandomisedMatrix() {
        commonMethods.clickOnElementForceTrueByIndex('[aria-label="Select"]', 0);
        commonMethods.clickOnElement('[data-testid="select-menu-item-1"]');
        commonMethods.clickOnElementForceTrueByIndex('[aria-label="Select"]', 1);
        commonMethods.clickOnElement('[data-testid="select-menu-item-1"]');
    };

    addOptionsRows() {
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix row"]', 0, 'Good');
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix row"]', 1, 'Bad');
    };

    addOptionsColumns() {
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix response option"]', 0, 'Pizza');
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix response option"]', 1, 'Burger');
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix response option"]', 2, 'Fries');
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix response option"]', 3, 'Soup');
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix response option"]', 4, 'Salad');
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix response option"]', 5, 'Pasta');
        commonMethods.typeTextIntoElementByIndex('[aria-label="Matrix response option"]', 6, 'Fish');
    };

    pinSecondOptionRows() {
        commonMethods.clickOnElementForceTrueByIndex('[aria-label="Icon kebab"]', 3);
        commonMethods.clickOnElementByText('ul > div:nth-child(2)', 'Pin response');
    };

    pinThirdOptionColumns() {
        commonMethods.clickOnElementForceTrueByIndex('[aria-label="Icon kebab"]', 6);
        commonMethods.clickOnElementForceTrueByIndex('.mui-cache-1qkf1a6 > ul > div > li > span', 2);
    };

    pinSeventhOptionColumns() {
        commonMethods.clickOnElementForceTrueByIndex('[aria-label="Icon kebab"]', 10);
        cy.wait(2000);
        commonMethods.clickOnElementForceTrueByIndex('.mui-cache-1qkf1a6 > ul > div > li > span', 2);
    };

    assertPinsMatrix() {
        commonMethods.assertElementIsVisible('[aria-label="Unpin row"]');
        commonMethods.assertElementIsVisible('li:nth-child(3) [aria-label="Unpin response option"]:nth-child(2)');
        commonMethods.assertElementIsVisible('li:nth-child(7) [aria-label="Unpin response option"]:nth-child(2)');
    };
}

export const surveyPage = new SurveyPage();
