package com.orangehrmlive.demo_opensource.cucumber.stepdefs;

import com.orangehrmlive.demo_opensource.pages.DashBoardPage;
import com.orangehrmlive.demo_opensource.pages.HomePage;
import com.orangehrmlive.demo_opensource.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
        new LoginPage().enterUserName(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();

    }

    @Then("^I should see welcomeText \"([^\"]*)\"$")
    public void iShouldSeeWelcomeText(String welcomeText) {
        Assert.assertEquals(welcomeText,new DashBoardPage().getWelcomeTextAfterLogin());

    }
}
