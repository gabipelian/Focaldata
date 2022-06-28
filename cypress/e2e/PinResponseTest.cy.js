import {loginPage} from "../pages/LoginPage";
import {projectsPage} from "../pages/ProjectsPage";
import {surveyPage} from "../pages/SurveyPage";
import {previewPage} from "../pages/PreviewPage";

const EMAIL = Cypress.env('email');
const PASSWORD = Cypress.env('password');

const testData = [
    {
        typeOfQuestion: 'Single select'
    },

    {
        typeOfQuestion: 'Multi select'
    },

    {
        typeOfQuestion: 'Matrix (grid)'
    },

    {
        typeOfQuestion: 'Ranked'
    }
]

describe('Pin response feature should work as expected', () => {
    beforeEach(() => {
        loginPage.login(EMAIL, PASSWORD);
    });

    testData.forEach(data => {
        it(`Verify pin feature for: '${data.typeOfQuestion}`, () => {
            projectsPage.addNewProject();
            surveyPage.clickOnToSurveyButton();
            surveyPage.clickOnAddButton();
            cy.wait(1000);
            surveyPage.selectTypeOfQuestion(data.typeOfQuestion);
            cy.wait(1000);
            if (data.typeOfQuestion === 'Matrix (grid)') {
                surveyPage.typeYourQuestionMatrix('What is your favourite type of food?');
                surveyPage.selectRandomisedMatrix();
                surveyPage.add5Responses();
                surveyPage.addOptionsRows();
                surveyPage.addOptionsColumns();
                surveyPage.pinSecondOptionRows();
                surveyPage.pinThirdOptionColumns();
                surveyPage.pinSeventhOptionColumns();
                surveyPage.assertPinsMatrix();
            } else {
                surveyPage.typeYourQuestion('What is your favourite type of food?');
                surveyPage.selectRandomised();
                surveyPage.add5Responses();
                surveyPage.addOptions();
                surveyPage.pinThirdOption();
                surveyPage.pinSeventhOption();
                surveyPage.assertPins();
            }
                projectsPage.deleteProject();

        });
    });
})
