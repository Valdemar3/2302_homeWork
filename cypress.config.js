const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
 
  e2e: {
    baseUrl: 'https://automationteststore.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config); 
      return config;
    },
  },
});
