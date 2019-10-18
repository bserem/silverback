import {workspaces} from "./mappings";

export const viewPage = function (workspace, title) {
  cy.drupalSession({user: 'admin', workspace: workspaces[workspace]});
  cy.visit(`/cypress/entity/node/canonical?title=${encodeURI(title)}`, {
    failOnStatusCode: false
  });
};

export const createPage = function (workspace, title) {
  cy.drupalScript(`silverback:integration/common/helpers/create-page.php`, {
    title: title,
    workspace: workspaces[workspace]
  });
};

export const editPage = function (workspace, oldTitle, newTitle) {
  cy.drupalScript(`silverback:integration/common/helpers/edit-page.php`, {
    title: oldTitle,
    workspace: workspaces[workspace],
    newTitle: newTitle
  });
};

