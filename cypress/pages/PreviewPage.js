import {commonMethods} from "../common/CommonMethods";
import {preview} from "../data/Selectors";

export class PreviewPage {
    select45_54() {
        commonMethods.clickOnElement(preview.AGE);
    };

    clickOnNext() {
        commonMethods.clickOnElementByText(preview.NEXT, 'Next');
    };

    selectMale() {
        commonMethods.clickOnElement(preview.GENDER);
    };

    selectGreaterLondon() {
        commonMethods.clickOnElement(preview.LOCATION);
    };

    assertPinnedOptions() {
        commonMethods.assertElementContainsExpectedText(preview.ASSERT_PINNED_3, 'Fries');
        commonMethods.assertElementContainsExpectedText(preview.ASSERT_PINNED_7, 'Fish');
    };

    assertPinnedOptionMatrix() {
        commonMethods.assertElementContainsExpectedText(preview.ASSERT_PINNED_ROW_MATRIX, 'Bad');
        commonMethods.assertElementContainsExpectedText(preview.ASSERT_PINNED_3_MATRIX, 'Fries');
        commonMethods.assertElementContainsExpectedText(preview.ASSERT_PINNED_7_MATRIX, 'Fish');
    };

}

export const previewPage = new PreviewPage();