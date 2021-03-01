package com.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.testbase.BaseClass;

public class ChooseYourHotelPageElements extends BaseClass{
	
	@FindBy(xpath = "(//button[@class= 'btn-sort tab'])[2]")
	public WebElement distanceFromDowntownBtn;
	
    @FindBy(xpath = "//span[@id='star-legend']")
    public WebElement propertyClassFilter;
	
	@FindBy(name = "star")
	public List<WebElement> propertyClassList;
	
	@FindBy(name = "hideRegionId")
	public List<WebElement> neighborhood;
	
	@FindBy(name = "guestRating")
	public List<WebElement> guestRating;
	
	@FindBy(xpath = "//span[@id='guestRating-legend']")
	public WebElement guestRatingFilterContainer;
	
	@FindBy(xpath = "//body/div[@id='experiments']/form[@id='searchForm']/div[@id='mainContent']/div[2]/div[3]/div[1]/ul[1]/li[1]/button[1]")
	public WebElement propertyClassApplied;
	
	@FindBy(xpath = "//body/div[@id='experiments']/form[@id='searchForm']/div[@id='mainContent']/div[2]/div[3]/div[1]/ul[1]/li[2]/button[1]")
	public WebElement neighborhoodApplied;
	
	@FindBy(xpath = "//body/div[@id='experiments']/form[@id='searchForm']/div[@id='mainContent']/div[2]/div[3]/div[1]/ul[1]/li[3]/button[1]")
	public WebElement guestRatingApplied;
	
	@FindBy(xpath = "(//a[contains(text(), '$')])[1]")
	public WebElement firstRoomOriginalPrice;
	
	@FindBy(xpath = "(//li[contains(text(), '$')])[1]")
	public WebElement firstRoomDiscountedPrice;
	
	@FindBy(xpath = "//body/div[@id='experiments']/form[@id='searchForm']/div[@id='mainContent']/div[2]/div[4]/section[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/fieldset[1]/ul[1]/li[3]/button[1]")
	public WebElement priceFilterBtn;
	
	@FindBy(xpath = "//body/div[@id='experiments']/form[@id='searchForm']/div[@id='mainContent']/div[2]/div[4]/section[1]/div[1]/div[22]/section[1]/article[1]/div[2]/div[1]/a[1]")
	public WebElement firstRoomLink;
	
	public ChooseYourHotelPageElements() {
		PageFactory.initElements(driver, this);
	}

}
