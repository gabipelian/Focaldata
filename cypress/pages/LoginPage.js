import {commonMethods} from "../common/CommonMethods";

export class LoginPage {
    openLoginPage() {
        commonMethods.visitPage(Cypress.env("baseUrl"));
    };

    insertEmail(email) {
        commonMethods.typeTextIntoElement('[aria-label="Input"]', email);
    };

    insertPassword(password) {
        commonMethods.typeTextIntoElement('[aria-label="Password input"]', password);
    };

    clickOnLoginButton() {
        commonMethods.clickOnElement('[type="submit"]');
    };

    login(email, password) {
        this.openLoginPage();
        this.insertEmail(email);
        this.insertPassword(password);
        this.clickOnLoginButton();
        this.clickOnLoginButton();
        //cy.wait(1000);
    }
}

export const loginPage = new LoginPage();