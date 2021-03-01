package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.testbase.BaseClass;

public class ChooseYourFlightPageElements extends BaseClass{
	
	@FindBy(xpath = "//header/h1[1]/div[1]/span[3]/div[1]")
	public WebElement departureDateText;
	
	@FindBy(xpath = "//input[@id='stopFilter_stops-1']")
	public WebElement oneStopCheckBox;
	
	@FindBy(xpath = "//span[@id='1-stop-flights-checkbox']")
	public WebElement oneStopCheckBoxText;
	
	public ChooseYourFlightPageElements() {
		PageFactory.initElements(driver, this);
	}

}
