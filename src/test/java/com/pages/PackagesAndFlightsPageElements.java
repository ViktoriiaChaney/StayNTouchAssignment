package com.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.testbase.BaseClass;

public class PackagesAndFlightsPageElements extends BaseClass {
	
	@FindBy(id = "tab-package-tab-hp")
	public WebElement flightPlusHotelBtn;
	
	@FindBy(id = "package-origin-hp-package")
	public WebElement originCity;
	
	@FindBy(id = "package-destination-hp-package")
	public WebElement destinationCity;
	
	@FindBy(id = "package-departing-hp-package")
	public WebElement departingDate;
	
	@FindBy(id = "package-returning-hp-package")
	public WebElement returningDate;
	
	@FindBy(xpath = "//button[@class='trigger-utility menu-trigger btn-utility btn-secondary dropdown-toggle theme-standard pin-left menu-arrow gcw-component gcw-traveler-amount-select gcw-component-initialized']")
	public WebElement travelersBtn;
	
	@FindBy(xpath = "(//button[@class = 'uitk-step-input-button uitk-step-input-plus'])[7]")
    public WebElement adultsBtn;
	
	@FindBy(xpath = "(//button[@class = 'uitk-step-input-button uitk-step-input-minus'])[7]")
	public WebElement subtractAdultBtn;
	
	@FindBy(xpath = "//a[@class = 'secondary gcw-component gcw-component-initialized gcw-clone-field']")
	public WebElement addSecondRoomLink;
	
	@FindBy(xpath = "//body/meso-native-marquee[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[2]/section[2]/form[1]/section[1]/div[2]/div[3]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/div[2]/div[2]/div[4]/button[1]/span[1]/*[1]")
	public WebElement secondRoomAdults;
	
	@FindBy(xpath = "//a[@class = 'secondary gcw-component gcw-component-initialized gcw-clone-field']")
	public WebElement addThirdRoomLink;
	
	@FindBy(xpath = "//body/meso-native-marquee[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[2]/section[2]/form[1]/section[1]/div[2]/div[3]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/div[3]/div[2]/div[4]/button[1]/span[1]/*[1]")
	public WebElement thirdRoomAdults;
	
	@FindBy(id = "package-advanced-preferred-class-hp-package")
	public WebElement airlineClass;
	
	@FindBy(id = "search-button-hp-package")
	public WebElement searchBtn;
	
	public PackagesAndFlightsPageElements() {
		PageFactory.initElements(driver, this);
	}

}
