package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.testbase.BaseClass;

public class MainPageElements extends BaseClass{
	
	@FindBy(xpath = "//nav[@class = 'header-secondary-nav']")
	public WebElement secondaryHeader;
	
	@FindBy(id = "hdr-deals")
	public WebElement dealsLink;
	
	@FindBy(id = "hdr-vr-homepage")
	public WebElement vacationRentalsLink;
	
	@FindBy(id = "hdr-things-to-do")
	public WebElement thingsToDoLink;
	
	@FindBy(id = "hdr-car-rental")
	public WebElement carRentalLink;
	
	@FindBy(id = "hdr-packages")
	public WebElement packagesAndFlightsLink;
	
	@FindBy(id = "hdr-groups")
	public WebElement groupsandMeetingsLink;
	
	@FindBy(id = "hdr-gift-card")
	public WebElement giftCardsLink;
	
	@FindBy(linkText = "List your property")
	public WebElement listYourPropertyLink;
	
	@FindBy(xpath = "//a[@id='hdr-rewards']")
	public WebElement hotelsRewardsLink;
	
	@FindBy(id = "hdr-credit-card")
	public WebElement hotelsCreditCardLink;
	
	public MainPageElements() {
		PageFactory.initElements(driver, this);
	}

}
