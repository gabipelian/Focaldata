import {commonMethods} from "../common/CommonMethods";
import {login} from "../data/Selectors";

export class LoginPage {
    openLoginPage() {
        commonMethods.visitPage(Cypress.env("baseUrl"));
    };

    insertEmail(email) {
        commonMethods.typeTextIntoElement(login.INSERT_EMAIL, email);
    };

    insertPassword(password) {
        commonMethods.typeTextIntoElement(login.INSERT_PASSWORD, password);
    };

    clickOnLoginButton() {
        commonMethods.clickOnElement(login.LOGIN_BUTTON);
    };

    login(email, password) {
        this.openLoginPage();
        this.insertEmail(email);
        this.insertPassword(password);
        this.clickOnLoginButton();
        this.clickOnLoginButton();
    }
}

export const loginPage = new LoginPage();