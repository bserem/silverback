(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),e("h2",{attrs:{id:"test-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-content","aria-hidden":"true"}},[t._v("#")]),t._v(" Test content")]),t._v(" "),e("p",[t._v("Silverback assumes that production databases are somewhat confidential and copying them all over the place might be a major security risk. So, no database syncing. Every new feature should provide illustrative test content by including a "),e("em",[t._v("test content module")]),t._v(", that contains "),e("a",{attrs:{href:"https://www.drupal.org/project/default_content",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("default_content")]),e("OutboundLink")],1),t._v(" exports or install hooks to create reproducible and testable content.")]),t._v(" "),e("blockquote",[e("p",[t._v("After "),e("code",[t._v("silverback setup")]),t._v(" a project has to be fully operational and testable.")])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("TODO:")]),t._v(" More detailed instructions for providing default content.")])]),t._v(" "),e("h2",{attrs:{id:"running-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Running tests")]),t._v(" "),e("p",[t._v("There are two levels of testing which will be executed by the [Travis] configuration added by "),e("code",[t._v("silverback init")]),t._v(".")]),t._v(" "),e("p",[t._v("Custom modules are tested with "),e("a",{attrs:{href:"https://www.drupal.org/docs/8/testing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drupal's standard testing frameworks"),e("OutboundLink")],1),t._v(". [Travis] will execute all Drupal tests in "),e("code",[t._v("web/modules/custom")]),t._v(".")]),t._v(" "),e("p",[t._v("For end to end testing, a [Cypress] configuration is provided in the "),e("code",[t._v("tests")]),t._v(" folder. "),e("code",[t._v("silverback init")]),t._v(" should have added some basic tests that you can run immediately.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("drush serve :8889\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" tests\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\ncypress run\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("This should run the tests in a headless browser. To run them interactively and automatically, execute "),e("code",[t._v("cypress open")]),t._v(", which will bring up the cypress interface. For more information on cypress options, please have a look at the [Cypress CLI documentation].")]),t._v(" "),e("h2",{attrs:{id:"writing-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Writing tests")]),t._v(" "),e("h3",{attrs:{id:"simple-javascript-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-javascript-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Simple javascript tests")]),t._v(" "),e("p",[t._v("You can learn how to write standard javascript tests from the "),e("a",{attrs:{href:"https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cypress documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"behavioral-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#behavioral-testing","aria-hidden":"true"}},[t._v("#")]),t._v(" Behavioral testing")]),t._v(" "),e("p",[t._v("The preferred way for writing tests is to use [Gherkin] to provide a specification of your feature "),e("em",[e("strong",[t._v("before")])]),t._v(" implementing it, and then adding step definitions to actually test your application.")]),t._v(" "),e("p",[t._v("One general misconception about behavior testing is to think it is there so you don't have to write test code but just "),e("em",[t._v('"plain English"')]),t._v(". "),e("em",[t._v("But that's not true!")]),t._v(" As a side effect, you "),e("em",[t._v("might")]),t._v(" be able to reuse some step definitions here and there, but the main goal is to create digestable feature definitions that all stakeholders can understand and participate on.")]),t._v(" "),e("p",[t._v("There is a lot of literature on writing good test specifications:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://aslakhellesoy.com/post/11055981222/the-training-wheels-came-off",target:"_blank",rel:"noopener noreferrer"}},[t._v("How the training wheels came off"),e("OutboundLink")],1),t._v(" by Aslak Hellesøy")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cucumber.io/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cucumber.io blog"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://soundcloud.com/cucumber-podcast",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cucumber podcast"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Silverback comes with a simple example that tests the administration login:")]),t._v(" "),e("div",{staticClass:"language-gherkin line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-gherkin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token feature"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Feature:")]),e("span",{pre:!0,attrs:{class:"token important"}},[t._v(" Login")]),t._v("\n\n  Basic Drupal site setup and administration login.\n\n")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token scenario"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Background:")]),e("span",{pre:!0,attrs:{class:"token important"}})]),t._v("\n    Initial site setup with working administration login.\n\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v("@Silverback")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v("@COMPLETED")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token scenario"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Scenario:")]),e("span",{pre:!0,attrs:{class:"token important"}},[t._v(" Valid Login")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("Given")]),t._v(" I am on the login screen\n    "),e("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("And")]),t._v(" I use the administration credentials to log in\n    "),e("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("Then")]),t._v(" I should see the administration toolbar\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("p",[t._v("This feature specification lives in any subfolder of "),e("code",[t._v("tests/cypress/integration")]),t._v(", where you can also find the full example of the login feature.\nThe tags the scenarios are annotated with allow to control "),e("em",[t._v("which")]),t._v(" tests are executed. The travis configuration will by default only execute tests that are tagged with "),e("code",[t._v("@COMPLETED")]),t._v(", So feature definitions can be added and worked on without breaking tests.")]),t._v(" "),e("p",[t._v("The corresponding step definitions look like this:")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* global Given, When, Then */")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("login")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("visit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/login'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#edit-name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#edit-pass'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#edit-submit'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Log in'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Given")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^I am on the login screen$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("visit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/login'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("When")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^I use the administration credentials to log in$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^I should see the administration toolbar$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#toolbar-bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])]),e("p",[t._v("We use "),e("a",{attrs:{href:"https://cucumber.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cucumber.js"),e("OutboundLink")],1),t._v(" and regular expressions to map readable step definitions to actual step implementations in javascript. Within these steps, you can use all "),e("a",{attrs:{href:"http://docs.cypress.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("cypress commands and extensions"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("Every scenario has to be isolated, and must not depend on execution of a previous scenario. Silverback contains hooks that will run "),e("code",[t._v("silverback setup")]),t._v(" and "),e("code",[t._v("silverback teardown")]),t._v(" at the beginning and end of every scenario to enforce that.")])]),t._v(" "),e("h3",{attrs:{id:"jira-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jira-integration","aria-hidden":"true"}},[t._v("#")]),t._v(" Jira integration")]),t._v(" "),e("p",[t._v("You can use the [Behave Pro] extension for Jira to maintain and discuss your specifications right alongside your tickets, which is a great way to make them more visible to all the stakeholders that understand "),e("em",[t._v("git")]),t._v(" as an insult.")]),t._v(" "),e("p",[t._v("Silverback comes with a "),e("code",[t._v("silverback download-tests")]),t._v(" command that will pull all feature specifications for a project. To enable it, you just have to add some variables to the "),e("code",[t._v(".env")]),t._v(" file at the root of the project:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("SB_JIRA_HOST")]),t._v(": The domain name of the Jira instance.")]),t._v(" "),e("li",[e("code",[t._v("SB_JIRA_USER")]),t._v(": The Jira user account.")]),t._v(" "),e("li",[e("code",[t._v("SB_JIRA_PASS")]),t._v(": The Jira account password.")]),t._v(" "),e("li",[e("code",[t._v("SB_JIRA_PROJECTS")]),t._v(": A space separated list of Jira projects as "),e("code",[t._v("[shortcut]:[project id]")]),t._v(" pairs. For example: "),e("code",[t._v("PROJ:12345")]),t._v(". To get your Jira project ID you might have to consult the instance' administrator.")])]),t._v(" "),e("p",[t._v("Tests are downloaded to project specific subfolders of "),e("code",[t._v("tests/cypress/integration")]),t._v(", (e.g. "),e("code",[t._v("tests/cypress/integration/PROJ")]),t._v(") and "),e("em",[t._v("should not be added to the git repsitory")]),t._v(", since they may change outside of the development workflow.")]),t._v(" "),e("p",[t._v("Scenarios downloaded from Jira will automatically be tagged based on their ticket, assignee and workflow state. Scenarios of tickets that are in progress are marked as "),e("code",[t._v("@WIP")]),t._v(" while everything that is considered "),e("em",[t._v("done")]),t._v(" has the tag "),e("code",[t._v("@COMPLETED")]),t._v(". Thats how the [Travis] configuration will only execute tests that are actually worth executing. For local development it might make sense to set the "),e("code",[t._v("CYPRESS_TAGS")]),t._v(" environment variable to "),e("code",[t._v("@assignee:my-jira-name and @WIP")]),t._v(" to only run tests for tickets that are assigned to oneself and currently in progress. It is also possible to add custom tags to scenarios in Jira.")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" The cucumber implementation currently only takes tags on scenarios into account. [Behave Pro] also allows to tag whole features, but these are ignored by the test runner (TODO: fix it in https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).")])])},[],!1,null,null,null);s.default=n.exports}}]);