package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.testbase.BaseClass;

public class ChooseYourRoomPageElements extends BaseClass{
	
	@FindBy(xpath = "//section[@id='rooms-and-rates']")
	public WebElement chooseYourRoom;
	
	@FindBy(xpath = " //body/div[3]/div[6]/section[2]/section[2]/article[2]/div[1]/div[1]/div[1]/h3[1]")
	public WebElement roomName;
	
	@FindBy(xpath = "//span[contains(text(),'Room sleeps 2 guests')]")
	public WebElement roomSize;
	
	@FindBy(xpath = "//body/div[3]/div[6]/section[2]/section[2]/article[2]/div[1]/div[1]/div[2]/div[2]/a[1]")
	public WebElement selectBtn;
	
	public ChooseYourRoomPageElements() {
		PageFactory.initElements(driver, this);
	}

}
