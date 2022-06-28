import {commonMethods} from "../common/CommonMethods";

export class ProjectsPage {
    clickOnCreateNewProject() {
        commonMethods.clickOnElement('[data-cy="dialog-button-opener"]');
    };

    addProjectTitle(title) {
        commonMethods.typeTextIntoElement('[data-cy="dialog-project-title"]', title);
    };

    clickOnCreateNewProjectInModal() {
        commonMethods.clickOnElement('[data-cy="dialog-primary-button"]');
    };

    addNewProject() {
        this.clickOnCreateNewProject();
        this.addProjectTitle('What is your favourite type of food?');
        this.clickOnCreateNewProjectInModal();
    };

    deleteProject() {
        commonMethods.visitPage('https://dashboard.focaldata.dev/projects');
        commonMethods.clickOnElementForceTrueByIndex('[data-testid="MoreVertIcon"]', 0);
        commonMethods.clickOnElement('[data-testid="DeleteOutlineIcon"]');
        commonMethods.clickOnElement('[data-cy="dialog-primary-button"]');
    };
}

export const projectsPage = new ProjectsPage();