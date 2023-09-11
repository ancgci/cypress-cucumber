const { defineConfig } = require("cypress");
const preprocessor = require("cypress-cucumber-preprocessor");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: 'cypress/e2e/bdd-cucumber/'
      baseUrl: 'https://www.saucedemo.com/'
    },
  },
  component: {
    setupNodeEvents(on, config) {
      // component testing node events setup code
    },
  },
})
