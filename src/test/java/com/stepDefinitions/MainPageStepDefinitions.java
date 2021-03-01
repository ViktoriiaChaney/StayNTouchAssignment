package com.stepDefinitions;

import java.util.Iterator;
import java.util.Set;

import org.junit.Assert;

import com.automation.utils.CommonMethods;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MainPageStepDefinitions extends CommonMethods {

	public static String mainPageHandle;
	public static String flightAndHotel;

	@When("a user navigates to www.hotels.com")
	public void a_user_navigates_to_www_hotels_com() {
		CommonMethods.takeScreenshot(getTimeStamp());
		mainPageHandle = driver.getWindowHandle();
	}

	@Then("verify the banner contains {string}, {string}, {string}, {string}, {string}, {string}, {string}")
	public void verify_the_banner_contains(String deals, String thingsToDo, String packagesAndFlights,
			String groupsAndMeetings, String giftCards, String listYourProperty, String HotelsRewards)
			throws InterruptedException {
		Thread.sleep(3000);
		Assert.assertTrue(main.dealsLink.getText().contentEquals(deals));
		Assert.assertTrue(main.thingsToDoLink.getText().contentEquals(thingsToDo));
		Assert.assertTrue(main.packagesAndFlightsLink.getText().contentEquals(packagesAndFlights));
		Assert.assertTrue(main.groupsandMeetingsLink.getText().contentEquals(groupsAndMeetings));
		Assert.assertTrue(main.giftCardsLink.getText().contentEquals(giftCards));
		Assert.assertTrue(main.listYourPropertyLink.getText().contentEquals(listYourProperty));
		CommonMethods.waitForVisibility(main.hotelsRewardsLink);
		Assert.assertTrue(main.hotelsRewardsLink.getText().contentEquals("Hotels.com® Rewards"));
	}

	@Then("click on {string}")
	public void click_on(String string) throws InterruptedException {
		CommonMethods.waitForClicability(main.packagesAndFlightsLink);
		main.packagesAndFlightsLink.click();
	}

	@Then("select flight and hotel option")
	public void select_flight_and_hotel_option() throws InterruptedException {
		Thread.sleep(3000);
		Set<String> allWindowHandles = driver.getWindowHandles();
		Iterator<String> it = allWindowHandles.iterator();
		while (it.hasNext()) {
			String flightAndHotel = it.next();
			if (!flightAndHotel.equals(mainPageHandle)) {
				driver.switchTo().window(flightAndHotel);
			}
		}
		flightAndHotel = driver.getWindowHandle();
		if (packagesAndFlights.flightPlusHotelBtn.isEnabled()) {
			if (!packagesAndFlights.flightPlusHotelBtn.isSelected()) {
				packagesAndFlights.flightPlusHotelBtn.click();
			}
		}
		Thread.sleep(2000);
	}

	@Then("enter {string}")
	public void enter(String originCity) throws InterruptedException {
		CommonMethods.sendText(packagesAndFlights.originCity, originCity);
		Thread.sleep(1000);
	}

	@Then("enter {string} next")
	public void enter_next(String destinationCity) throws InterruptedException {
		CommonMethods.sendText(packagesAndFlights.destinationCity, destinationCity);
		Thread.sleep(1000);
	}

	@Then("select {string} and {string} dates")
	public void select_and_dates(String departureDate, String returnDate) throws InterruptedException {
		CommonMethods.sendText(packagesAndFlights.departingDate, departureDate);
		Thread.sleep(2000);
		packagesAndFlights.returningDate.click();
		packagesAndFlights.returningDate.clear();
		CommonMethods.selectDateByJS(packagesAndFlights.returningDate, returnDate);
		Thread.sleep(2000);
	}

	@Then("select number of {string} and {string}")
	public void select_number_of_and(String travelers, String rooms) throws InterruptedException {
		CommonMethods.jsClick(packagesAndFlights.travelersBtn);
		int traveler = Integer.parseInt(travelers);
		int room = Integer.parseInt(rooms);
		
		for(int i = 2; i <= room; i++) {
			if(i==2) {
				CommonMethods.waitForClicability(packagesAndFlights.addSecondRoomLink);
				CommonMethods.jsClick(packagesAndFlights.addSecondRoomLink);
			}else if(i==3) {
				CommonMethods.waitForClicability(packagesAndFlights.addThirdRoomLink);
				CommonMethods.jsClick(packagesAndFlights.addThirdRoomLink);
			}
		}

		if (traveler == 1) { // by default 2 Adults and 1 Room selected
			packagesAndFlights.subtractAdultBtn.click();
		} if (traveler > 3) {
			CommonMethods.waitForClicability(packagesAndFlights.secondRoomAdults);
			packagesAndFlights.secondRoomAdults.click();
		} if (traveler > 5) {
			CommonMethods.waitForClicability(packagesAndFlights.thirdRoomAdults);
			packagesAndFlights.thirdRoomAdults.click();
		}
		Thread.sleep(2000);
	}

	@Then("select {string}")
	public void select(String airlineClass) throws InterruptedException {
		CommonMethods.waitForClicability(packagesAndFlights.airlineClass);
		CommonMethods.selectDDValue(packagesAndFlights.airlineClass, airlineClass);
		Thread.sleep(1000);
	}

	@Then("click on Search Button")
	public void click_on_Search_Button() {
		CommonMethods.takeScreenshot(getTimeStamp());
		CommonMethods.jsClick(packagesAndFlights.searchBtn);
	}

	@Then("apply distance from Downtown")
	public void apply_distance_from_Downtown() throws InterruptedException {
		Thread.sleep(2000);
		CommonMethods.waitForClicability(chooseHotel.distanceFromDowntownBtn);
		CommonMethods.jsClick(chooseHotel.distanceFromDowntownBtn);
	}

	@Then("choose {string}, {string} and {string}")
	public void choose_and(String star, String neighborhood, String guestRating) throws InterruptedException {
		Thread.sleep(2000);
		CommonMethods.selectCheckBoxById(chooseHotel.propertyClassList, star);
		Thread.sleep(3000);
		CommonMethods.selectCheckBoxById(chooseHotel.neighborhood, neighborhood);
		Thread.sleep(3000);
		CommonMethods.scrollIntoView(chooseHotel.guestRatingFilterContainer);
		Thread.sleep(4000);
		CommonMethods.waitForClicability(chooseHotel.guestRatingFilterContainer);
		CommonMethods.jsClick(chooseHotel.guestRatingFilterContainer);
		CommonMethods.selectCheckBoxById(chooseHotel.guestRating, guestRating);
		Thread.sleep(2000);
	}
	
	@Then("verify that all filters have been applied")
	public void verify_that_all_filters_have_been_applied() {
	    Assert.assertTrue(chooseHotel.propertyClassApplied.isDisplayed());
	    Assert.assertTrue(chooseHotel.neighborhoodApplied.isDisplayed());
	    Assert.assertTrue(chooseHotel.guestRatingApplied.isDisplayed());
	    CommonMethods.takeScreenshot(getTimeStamp());
	}
	
	@Then("calculate discounted value if discount is present")
	public void calculate_discounted_value_if_discount_is_present() throws NumberFormatException {
	   if(chooseHotel.firstRoomDiscountedPrice.isDisplayed()) {
		   int originalPrice = Integer.parseInt(chooseHotel.firstRoomOriginalPrice.getText().replaceAll("[^0-9]", "").trim());
		   int discountedPrice = Integer.parseInt(chooseHotel.firstRoomDiscountedPrice.getText().replaceAll("[^0-9]", "").trim());
		   int discountedValue = originalPrice - discountedPrice;
		   System.out.println(discountedValue);
	   }
	}
	
	@Then("select room with the lowest rate and capture the rate")
	public void select_room_with_the_lowest_rate_and_capture_the_rate() throws InterruptedException {
	    CommonMethods.waitForClicability(chooseHotel.priceFilterBtn);
	    CommonMethods.jsClick(chooseHotel.priceFilterBtn);
	    Thread.sleep(2000);
	    CommonMethods.drawRedBorder(chooseHotel.firstRoomDiscountedPrice);
	    System.out.println(chooseHotel.firstRoomDiscountedPrice.getText().replaceAll("[^0-9]", "").trim());
	    CommonMethods.takeScreenshot(getTimeStamp());
	    CommonMethods.jsClick(chooseHotel.firstRoomLink);
	}
	
	@Then("select the first room that appears in {string} section")
	public void select_the_first_room_that_appears_in_section(String string) throws InterruptedException {
		Thread.sleep(3000);
		Set<String> allWindowHandles = driver.getWindowHandles();
		Iterator<String> it = allWindowHandles.iterator();
		while (it.hasNext()) {
			String chooseRoom = it.next();
			if ((!chooseRoom.equals(mainPageHandle))&&(!chooseRoom.equals(flightAndHotel))) {
				driver.switchTo().window(chooseRoom);
			}
		}
	    CommonMethods.scrollIntoView(chooseRoom.chooseYourRoom);
	    System.out.println("The room name is - "+chooseRoom.roomName.getText());
	    System.out.println("The room size is - "+chooseRoom.roomSize.getText());
	    CommonMethods.waitForClicability(chooseRoom.selectBtn);
	    CommonMethods.jsClick(chooseRoom.selectBtn);
	}
	
	@Then("verify that {string} is the same as {string}")
	public void verify_that_is_the_same_as(String expectedDate, String actualDate) throws InterruptedException {
		Thread.sleep(2000);
		CommonMethods.waitForVisibility(chooseFlight.departureDateText);
		Assert.assertTrue(chooseFlight.departureDateText.getText().contentEquals(expectedDate));
	}
	
	@Then("apply {string} filter and capture the number of flight available")
	public void apply_filter_and_capture_the_number_of_flight_available(String string) throws InterruptedException {
	    Thread.sleep(2000);
	    CommonMethods.waitForClicability(chooseFlight.oneStopCheckBox);
	    CommonMethods.jsClick(chooseFlight.oneStopCheckBox);
	    CommonMethods.scrollIntoView(chooseFlight.oneStopCheckBox);
	    CommonMethods.drawRedBorder(chooseFlight.oneStopCheckBoxText);
	    CommonMethods.takeScreenshot(getTimeStamp());
	}
	
}
