const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
  experimentalSessionSupport: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 0,
  defaultCommandTimeout: 30000,
  parseSpecialCharSequences: true,
  env: {
    email: "gabipelian@gmail.com",
    password: "Ferdinand1971",
    baseUrl: "https://dashboard.focaldata.dev/"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
