const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login: 'adamiaka',
    password: 'abc123',
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    baseUrl: 'https://automationteststore.com',
    excludeSpecPattern: [],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
