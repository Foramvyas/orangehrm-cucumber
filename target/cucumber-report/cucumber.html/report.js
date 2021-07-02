$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs a user I want to use login and log out functionality of OrangeHrm website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7870530500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 236677500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should login and verify the welcome text successfully",
  "description": "",
  "id": "login-test;user-should-login-and-verify-the-welcome-text-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity,"
    },
    {
      "line": 8,
      "name": "@Smoke,"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see welcomeText \"Welcome Paul\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 162336500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 176921800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 4572869100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome Paul",
      "offset": 26
    }
  ],
  "location": "LoginTest.iShouldSeeWelcomeText(String)"
});
formatter.result({
  "duration": 62605200,
  "status": "passed"
});
formatter.after({
  "duration": 1360146900,
  "status": "passed"
});
formatter.before({
  "duration": 7272002900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 50700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should log out successfully and should see the message Login Panel after log out",
  "description": "",
  "id": "login-test;user-should-log-out-successfully-and-should-see-the-message-login-panel-after-log-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke,"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on welcome text",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see text \"LOGIN Panel\" on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 120883500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 120680100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1810483800,
  "status": "passed"
});
formatter.match({
  "location": "LogOutTest.iClickOnWelcomeText()"
});
formatter.result({
  "duration": 696943600,
  "status": "passed"
});
formatter.match({
  "location": "LogOutTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 628348200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 19
    }
  ],
  "location": "LogOutTest.iShouldSeeTextOnHomePage(String)"
});
formatter.result({
  "duration": 56461800,
  "status": "passed"
});
formatter.after({
  "duration": 944967300,
  "status": "passed"
});
});