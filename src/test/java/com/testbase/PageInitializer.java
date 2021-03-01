package com.testbase;

import com.pages.ChooseYourFlightPageElements;
import com.pages.ChooseYourHotelPageElements;
import com.pages.ChooseYourRoomPageElements;
import com.pages.MainPageElements;
import com.pages.PackagesAndFlightsPageElements;

public class PageInitializer extends BaseClass{
	
	protected static MainPageElements main;
	protected static PackagesAndFlightsPageElements packagesAndFlights;
	protected static ChooseYourHotelPageElements chooseHotel;
	protected static ChooseYourRoomPageElements chooseRoom;
	protected static ChooseYourFlightPageElements chooseFlight;
	
	public static void initializePageObjects() {
		
		main = new MainPageElements();
		packagesAndFlights = new PackagesAndFlightsPageElements();
		chooseHotel = new ChooseYourHotelPageElements();
		chooseRoom = new ChooseYourRoomPageElements();
		chooseFlight = new ChooseYourFlightPageElements();
	}

}
