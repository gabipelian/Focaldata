import {commonMethods} from "../common/CommonMethods";

export class PreviewPage {
    select45_54() {
        commonMethods.clickOnElement('[data-cy="response-option-4"]');
    };

    clickOnNext() {
        commonMethods.clickOnElementByText('.MuiGrid-root.mui-cache-rfnosa', 'Next');
    };

    selectMale() {
        commonMethods.clickOnElement('[data-cy="response-option-0"]');
    };

    selectGreaterLondon() {
        commonMethods.clickOnElement('[data-cy="response-option-4"]');
    };

    assertPinnedOptions() {
        commonMethods.assertElementContainsExpectedText('[data-cy="response-option-2"]', 'Fries');
        commonMethods.assertElementContainsExpectedText('[data-cy="response-option-6"]', 'Fish');
    };

}

export const previewPage = new PreviewPage();