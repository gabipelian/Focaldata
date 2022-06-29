let login = {
    INSERT_EMAIL: "[aria-label='Input']",
    INSERT_PASSWORD: "[aria-label='Password input']",
    LOGIN_BUTTON: "[type='submit']"
}

let projects = {
    CREATE_NEW_PROJECT: "[data-cy='dialog-button-opener']",
    ADD_PROJECT_TITLE: "[data-cy='dialog-project-title']",
    CREATE_NEW_PROJECT_IN_MODAL: "[data-cy='dialog-primary-button']",
    PROJECT_MENU: "[data-testid='MoreVertIcon']",
    DELETE_PROJECT: "[data-testid='DeleteOutlineIcon']",
    DELETE: "[data-cy='dialog-primary-button']"
}

let survey = {
    TO_SURVEY_BUTTON: ".MuiGrid-grid-sm-5 button",
    ADD_BUTTON: "[data-testid='AddIcon']",
    TYPE_OF_QUESTION: "div[class='MuiGrid-root tss-fil0uv-customMenuItem mui-cache-rfnosa']",
    YOUR_QUESTION: "[aria-label='Basic question header input']",
    SELECT: ".MuiGrid-root .mui-cache-1t969rj",
    RANDOMISED: "[data-testid='select-menu-item-1']",
    TYPE_OPTION: "[aria-label='Basic question response option']",
    ADD_RESPONSE: "[aria-label='Add response']",
    OPTION: "[data-testid='MoreHorizIcon']",
    PIN: "ul:nth-child(1) > div:nth-child(2)",
    PIN_3: ".MuiList-root li:nth-child(3) [aria-label='Unpin response option']",
    PIN_7: ".MuiList-root li:nth-child(7) [aria-label='Unpin response option']",
    YOUR_QUESTION_MATRIX: ".public-DraftStyleDefault-block",
    SELECT_MATRIX: "[aria-label='Select']",
    RANDOMISED_MATRIX: "[data-testid='select-menu-item-1']",
    OPTIONS_ROWS: "[aria-label='Matrix row']",
    OPTIONS_COLUMNS: "[aria-label='Matrix response option']",
    OPTION_MATRIX: "[aria-label='Icon kebab']",
    PIN_SECOND_OPTION_ROWS: "ul > div:nth-child(2)",
    PIN_OPTION_COLUMNS: ".mui-cache-1qkf1a6 > ul > div > li > span",
    ASSERT_PIN: "[aria-label='Unpin row']",
    ASSERT_PIN_3: "li:nth-child(3) [aria-label='Unpin response option']:nth-child(2)",
    ASSERT_PIN_7: "li:nth-child(7) [aria-label='Unpin response option']:nth-child(2)",
    PREVIEW_BUTTON: ".mui-cache-1af3jam"
}

let preview = {
    AGE: "[data-cy='response-option-4']",
    NEXT: ".MuiGrid-root.mui-cache-rfnosa",
    GENDER: "[data-cy='response-option-0']",
    LOCATION: "[data-cy='response-option-4']",
    ASSERT_PINNED_3: "[data-cy='response-option-2']",
    ASSERT_PINNED_7: "[data-cy='response-option-6']",
    ASSERT_PINNED_ROW_MATRIX: "tr:nth-child(2) > td:nth-child(1) > h6",
    ASSERT_PINNED_3_MATRIX: "table > thead > tr > th:nth-child(4)",
    ASSERT_PINNED_7_MATRIX: "table > thead > tr > th:nth-child(8)"
}


module.exports = {
    login, projects, survey, preview
}
