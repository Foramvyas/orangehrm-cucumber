package com.orangehrmlive.demo_opensource.pages;



import com.orangehrmlive.demo_opensource.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

public class DashBoardPage extends Utility {


    private static final Logger log = LogManager.getLogger(DashBoardPage.class.getName());

    By welcomeText = By.xpath("//a[@id='welcome']");

    By logOut = By.linkText("Logout");


    public String getWelcomeTextAfterLogin() {
        log.info("Get welcome text after login : " + welcomeText.toString());
        return getTextFromElement(welcomeText);
    }

    public void clickOnWelcomeText() {
        log.info("Click on Welcome Text: " + welcomeText.toString());
        clickOnElement(welcomeText);
    }

    public void clickOnLogOutButton(){

        log.info("Click on Logout button : "+logOut.toString());
        clickOnElement(logOut);
    }



}


