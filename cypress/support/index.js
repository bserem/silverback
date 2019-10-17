// @ts-check
/// <reference types="Cypress" />

// Automatic Drupal setup/teardown for tests.
beforeEach(() => {
  cy.drupalInstall('minimal', null, '../vendor/amazeelabs/silverback/config', '../vendor/amazeelabs/silverback/install-cache.zip');
});
