import {commonMethods} from "../common/CommonMethods";
import {preview, survey} from "../data/Selectors";

export class SurveyPage {
    clickOnToSurveyButton() {
        commonMethods.clickOnElement(survey.TO_SURVEY_BUTTON);
    };

    clickOnAddButton() {
        commonMethods.clickOnElementForceTrueByIndex(survey.ADD_BUTTON, 0);
    };

    selectTypeOfQuestion(typeOfQuestion) {
        commonMethods.clickOnElementByText(survey.TYPE_OF_QUESTION, typeOfQuestion);
    };

    typeYourQuestion(text) {
        commonMethods.typeTextIntoElement(survey.YOUR_QUESTION, text);
    };

    selectRandomised() {
        commonMethods.clickOnElement(survey.SELECT);
        commonMethods.clickOnElement(survey.RANDOMISED);
    };

    typeOption(index, text) {
        commonMethods.typeTextIntoElementByIndex(survey.TYPE_OPTION, index, text);
    };

    addRow() {
        commonMethods.clickOnElement('[aria-label="Add row"]');
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

    add5Responses() {
        commonMethods.clickOnElement(survey.ADD_RESPONSE);
        commonMethods.clickOnElement(survey.ADD_RESPONSE);
        commonMethods.clickOnElement(survey.ADD_RESPONSE);
        commonMethods.clickOnElement(survey.ADD_RESPONSE);
        commonMethods.clickOnElement(survey.ADD_RESPONSE);
    };

    pinThirdOption() {
        commonMethods.clickOnElementForceTrueByIndex(survey.OPTION, 2);
        commonMethods.clickOnElementByText(survey.PIN, 'Pin response');
    };

    pinSeventhOption() {
        commonMethods.clickOnElementForceTrueByIndex(survey.OPTION, 6);
        commonMethods.clickOnElementByText(survey.PIN, 'Pin response');
    };

    assertPins() {
        commonMethods.assertElementIsVisible(survey.PIN_3);
        commonMethods.assertElementIsVisible(survey.PIN_7);
    };

    typeYourQuestionMatrix(text) {
        commonMethods.typeTextIntoElement(survey.YOUR_QUESTION_MATRIX, text);
    };

    selectRandomisedMatrix() {
        commonMethods.clickOnElementForceTrueByIndex(survey.SELECT_MATRIX, 0);
        commonMethods.clickOnElement(survey.RANDOMISED_MATRIX);
        commonMethods.clickOnElementForceTrueByIndex(survey.SELECT_MATRIX, 1);
        commonMethods.clickOnElement(survey.RANDOMISED_MATRIX);
    };

    addOptionsRows() {
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_ROWS, 0, 'Good');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_ROWS, 1, 'Bad');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_ROWS, 2, 'Neutral');
    };

    addOptionsColumns() {
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_COLUMNS, 0, 'Pizza');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_COLUMNS, 1, 'Burger');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_COLUMNS, 2, 'Fries');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_COLUMNS, 3, 'Soup');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_COLUMNS, 4, 'Salad');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_COLUMNS, 5, 'Pasta');
        commonMethods.typeTextIntoElementByIndex(survey.OPTIONS_COLUMNS, 6, 'Fish');
    };

    pinSecondOptionRows() {
        commonMethods.clickOnElementForceTrueByIndex(survey.OPTION_MATRIX, 3);
        commonMethods.clickOnElementByText(survey.PIN_SECOND_OPTION_ROWS, 'Pin response');
    };

    pinThirdOptionColumns() {
        commonMethods.clickOnElementForceTrueByIndex(survey.OPTION_MATRIX, 7);
        commonMethods.clickOnElementForceTrueByIndex(survey.PIN_OPTION_COLUMNS, 2);
    };

    pinSeventhOptionColumns() {
        commonMethods.clickOnElementForceTrueByIndex(survey.OPTION_MATRIX, 11);
        commonMethods.clickOnElementForceTrueByIndex(survey.PIN_OPTION_COLUMNS, 2);
    };

    assertPinsMatrix() {
        commonMethods.assertElementIsVisible(survey.ASSERT_PIN);
        commonMethods.assertElementIsVisible(survey.ASSERT_PIN_3);
        commonMethods.assertElementIsVisible(survey.ASSERT_PIN_7);
    };

    spyingOnRedirect() {
        cy.window().then((win) => {
            cy.spy(win, 'open').as('redirect')
        });

       commonMethods.clickOnElementByText(survey.PREVIEW_BUTTON, 'Preview');

        cy.get('@redirect').should('be.calledWith', Cypress.sinon.match.string).then(stub => {
            cy.visit(stub.args[0][0]);
        });
    };
}

export const surveyPage = new SurveyPage();
