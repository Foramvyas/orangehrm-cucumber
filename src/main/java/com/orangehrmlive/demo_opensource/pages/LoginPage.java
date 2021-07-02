package com.orangehrmlive.demo_opensource.pages;

import com.orangehrmlive.demo_opensource.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

public class LoginPage extends Utility {


    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    By userName= By.xpath("//input[@id='txtUsername']");
    By passWord= By.xpath("//input[@id='txtPassword']");
    By loginButton= By.xpath("//input[@id='btnLogin']");

    public void enterUserName(String username){
        log.info("Enter username to User name : "+userName.toString());
        sendTextToElement(userName,username);

    }

    public void enterPassword(String password){
        log.info("Enter password : "+passWord.toString());
        sendTextToElement(passWord, password);
    }


    public void clickOnLoginButton(){
        log.info("Click on login button: "+loginButton.toString());
        clickOnElement(loginButton);
    }

}
