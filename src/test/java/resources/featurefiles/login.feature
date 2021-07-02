Feature: Login Test

  As a user I want to use login and log out functionality of OrangeHrm website


  Background:
    Given I am on homepage

  @Sanity,@Smoke,@Regression
  Scenario: User should login and verify the welcome text successfully
    When I enter username "Admin"
    And I enter password "admin123"
    And I click on Login button
    Then I should see welcomeText "Welcome Paul"

  @Smoke,@Regression
  Scenario: User should log out successfully and should see the message Login Panel after log out
    When I enter username "Admin"
    And I enter password "admin123"
    And I click on Login button
    Then I click on welcome text
    And I click on Logout button
    Then I should see text "LOGIN Panel" on home page
