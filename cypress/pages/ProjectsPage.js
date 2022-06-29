import {commonMethods} from "../common/CommonMethods";
import {projects} from "../data/Selectors";

export class ProjectsPage {
    clickOnCreateNewProject() {
        commonMethods.clickOnElement(projects.CREATE_NEW_PROJECT);
    };

    addProjectTitle(title) {
        commonMethods.typeTextIntoElement(projects.ADD_PROJECT_TITLE, title);
    };

    clickOnCreateNewProjectInModal() {
        commonMethods.clickOnElement(projects.CREATE_NEW_PROJECT_IN_MODAL);
    };

    visitProjectsUrl() {
        commonMethods.visitPage('https://dashboard.focaldata.dev/projects');
    }

    clickOnProjectMenu() {
        commonMethods.clickOnElementForceTrueByIndex(projects.PROJECT_MENU, 0);
    };

    clickOnDeleteProject() {
        commonMethods.clickOnElement(projects.DELETE_PROJECT);
    };

    clickOnDelete() {
        commonMethods.clickOnElement(projects.DELETE);
    }

    addNewProject() {
        this.clickOnCreateNewProject();
        this.addProjectTitle('What is your favourite type of food?');
        this.clickOnCreateNewProjectInModal();
    };

    deleteProject() {
        this.visitProjectsUrl();
        this.clickOnProjectMenu();
        this.clickOnDeleteProject();
        this.clickOnDelete();
    };
}

export const projectsPage = new ProjectsPage();