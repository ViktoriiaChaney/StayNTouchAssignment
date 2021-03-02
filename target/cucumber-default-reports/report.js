$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/Features/AutomationExercise.feature");
formatter.feature({
  "name": "Automation Exercise",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Implement Automation Exercise",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "a user navigates to www.hotels.com",
  "keyword": "When "
});
formatter.step({
  "name": "verify the banner contains \"Deals\", \"Things to do\", \"Packages \u0026 Flights\", \"Groups \u0026 Meetings\", \"Gift Cards\", \"List your property\", \"Hotels.com� Rewards\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on \"Packages \u0026 Flights\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select flight and hotel option",
  "keyword": "Then "
});
formatter.step({
  "name": "enter \"\u003cOrigin City\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enter \"\u003cDestination City\u003e\" next",
  "keyword": "And "
});
formatter.step({
  "name": "select \"\u003cDeparting\u003e\" and \"\u003cReturning\u003e\" dates",
  "keyword": "And "
});
formatter.step({
  "name": "select number of \"\u003cTravelers\u003e\" and \"\u003cRooms\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select \"\u003cAirline Class\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on Search Button",
  "keyword": "And "
});
formatter.step({
  "name": "apply distance from Downtown",
  "keyword": "Then "
});
formatter.step({
  "name": "choose \"\u003cProperty Class\u003e\", \"\u003cNeighborhood\u003e\" and \"\u003cGuest Rating\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify that all filters have been applied",
  "keyword": "Then "
});
formatter.step({
  "name": "calculate discounted value if discount is present",
  "keyword": "Then "
});
formatter.step({
  "name": "select room with the lowest rate and capture the rate",
  "keyword": "Then "
});
formatter.step({
  "name": "select the first room that appears in \u0027Choose Your Room\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "name": "verify that \"\u003cExpected Departure Date\u003e\" is the same as \"Actual Departure Date\"",
  "keyword": "Then "
});
formatter.step({
  "name": "apply \"1 Stop\" filter and capture the number of flight available",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Origin City",
        "Destination City",
        "Departing",
        "Returning",
        "Travelers",
        "Rooms",
        "Airline Class",
        "Property Class",
        "Neighborhood",
        "Guest Rating",
        "Expected Departure Date"
      ]
    },
    {
      "cells": [
        "Washington DC",
        "Phoenix",
        "03/22/2021",
        "03/26/2021",
        "1",
        "1",
        "First class",
        "star5",
        "neighborhood1",
        "guestRating45",
        "Mon, Mar 22"
      ]
    },
    {
      "cells": [
        "Phoenix",
        "Washington DC",
        "04/11/2021",
        "04/17/2021",
        "2",
        "1",
        "Business",
        "star4",
        "neighborhood2",
        "guestRating40",
        "Sun, Apr 11"
      ]
    },
    {
      "cells": [
        "Miami",
        "Chicago",
        "05/17/2021",
        "05/21/2021",
        "4",
        "2",
        "Premium economy",
        "star3",
        "neighborhood3",
        "guestRating35",
        "Mon, May 17"
      ]
    },
    {
      "cells": [
        "New York",
        "Los Angeles",
        "06/12/2021",
        "06/16/2021",
        "5",
        "3",
        "Economy/Coach",
        "star3",
        "neighborhood2",
        "guestRating35",
        "Sat, Jun 12"
      ]
    },
    {
      "cells": [
        "Los Angeles",
        "New York",
        "07/07/2021",
        "07/12/2021",
        "6",
        "3",
        "Economy/Coach",
        "star3",
        "neighborhood1",
        "guestRating35",
        "Wed, Jul 07"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Implement Automation Exercise",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user navigates to www.hotels.com",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.a_user_navigates_to_www_hotels_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the banner contains \"Deals\", \"Things to do\", \"Packages \u0026 Flights\", \"Groups \u0026 Meetings\", \"Gift Cards\", \"List your property\", \"Hotels.com� Rewards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_the_banner_contains(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Packages \u0026 Flights\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select flight and hotel option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_flight_and_hotel_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Washington DC\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Phoenix\" next",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"03/22/2021\" and \"03/26/2021\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_and_dates(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select number of \"1\" and \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_number_of_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"First class\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply distance from Downtown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_distance_from_Downtown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose \"star5\", \"neighborhood1\" and \"guestRating45\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.choose_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that all filters have been applied",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_all_filters_have_been_applied()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate discounted value if discount is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.calculate_discounted_value_if_discount_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select room with the lowest rate and capture the rate",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_room_with_the_lowest_rate_and_capture_the_rate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the first room that appears in \u0027Choose Your Room\u0027 section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_the_first_room_that_appears_in_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Mon, Mar 22\" is the same as \"Actual Departure Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_is_the_same_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply \"1 Stop\" filter and capture the number of flight available",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_filter_and_capture_the_number_of_flight_available(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "Implement Automation Exercise");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Implement Automation Exercise",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user navigates to www.hotels.com",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.a_user_navigates_to_www_hotels_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the banner contains \"Deals\", \"Things to do\", \"Packages \u0026 Flights\", \"Groups \u0026 Meetings\", \"Gift Cards\", \"List your property\", \"Hotels.com� Rewards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_the_banner_contains(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Packages \u0026 Flights\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select flight and hotel option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_flight_and_hotel_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Phoenix\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Washington DC\" next",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"04/11/2021\" and \"04/17/2021\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_and_dates(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select number of \"2\" and \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_number_of_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"Business\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply distance from Downtown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_distance_from_Downtown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose \"star4\", \"neighborhood2\" and \"guestRating40\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.choose_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that all filters have been applied",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_all_filters_have_been_applied()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate discounted value if discount is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.calculate_discounted_value_if_discount_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select room with the lowest rate and capture the rate",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_room_with_the_lowest_rate_and_capture_the_rate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the first room that appears in \u0027Choose Your Room\u0027 section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_the_first_room_that_appears_in_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Sun, Apr 11\" is the same as \"Actual Departure Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_is_the_same_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply \"1 Stop\" filter and capture the number of flight available",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_filter_and_capture_the_number_of_flight_available(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Implement Automation Exercise");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Implement Automation Exercise",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user navigates to www.hotels.com",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.a_user_navigates_to_www_hotels_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the banner contains \"Deals\", \"Things to do\", \"Packages \u0026 Flights\", \"Groups \u0026 Meetings\", \"Gift Cards\", \"List your property\", \"Hotels.com� Rewards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_the_banner_contains(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Packages \u0026 Flights\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select flight and hotel option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_flight_and_hotel_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Miami\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Chicago\" next",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"05/17/2021\" and \"05/21/2021\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_and_dates(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select number of \"4\" and \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_number_of_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"Premium economy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply distance from Downtown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_distance_from_Downtown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose \"star3\", \"neighborhood3\" and \"guestRating35\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.choose_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that all filters have been applied",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_all_filters_have_been_applied()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate discounted value if discount is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.calculate_discounted_value_if_discount_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select room with the lowest rate and capture the rate",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_room_with_the_lowest_rate_and_capture_the_rate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the first room that appears in \u0027Choose Your Room\u0027 section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_the_first_room_that_appears_in_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Mon, May 17\" is the same as \"Actual Departure Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_is_the_same_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply \"1 Stop\" filter and capture the number of flight available",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_filter_and_capture_the_number_of_flight_available(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Implement Automation Exercise");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Implement Automation Exercise",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user navigates to www.hotels.com",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.a_user_navigates_to_www_hotels_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the banner contains \"Deals\", \"Things to do\", \"Packages \u0026 Flights\", \"Groups \u0026 Meetings\", \"Gift Cards\", \"List your property\", \"Hotels.com� Rewards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_the_banner_contains(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Packages \u0026 Flights\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select flight and hotel option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_flight_and_hotel_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"New York\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Los Angeles\" next",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"06/12/2021\" and \"06/16/2021\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_and_dates(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select number of \"5\" and \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_number_of_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"Economy/Coach\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply distance from Downtown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_distance_from_Downtown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose \"star3\", \"neighborhood2\" and \"guestRating35\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.choose_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that all filters have been applied",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_all_filters_have_been_applied()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate discounted value if discount is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.calculate_discounted_value_if_discount_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select room with the lowest rate and capture the rate",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_room_with_the_lowest_rate_and_capture_the_rate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the first room that appears in \u0027Choose Your Room\u0027 section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_the_first_room_that_appears_in_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Sat, Jun 12\" is the same as \"Actual Departure Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_is_the_same_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply \"1 Stop\" filter and capture the number of flight available",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_filter_and_capture_the_number_of_flight_available(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Implement Automation Exercise");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Implement Automation Exercise",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user navigates to www.hotels.com",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.a_user_navigates_to_www_hotels_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the banner contains \"Deals\", \"Things to do\", \"Packages \u0026 Flights\", \"Groups \u0026 Meetings\", \"Gift Cards\", \"List your property\", \"Hotels.com� Rewards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_the_banner_contains(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dhdr-deals\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-R21286P5\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat com.stepDefinitions.MainPageStepDefinitions.verify_the_banner_contains(MainPageStepDefinitions.java:30)\r\n\tat ✽.verify the banner contains \"Deals\", \"Things to do\", \"Packages \u0026 Flights\", \"Groups \u0026 Meetings\", \"Gift Cards\", \"List your property\", \"Hotels.com� Rewards\"(file:///C:/Users/Viktoria%20Chaney/eclipse-workspace/StayNTouchAssignment/src/test/java/com/Features/AutomationExercise.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on \"Packages \u0026 Flights\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select flight and hotel option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_flight_and_hotel_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter \"Los Angeles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter \"New York\" next",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.enter_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select \"07/07/2021\" and \"07/12/2021\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_and_dates(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select number of \"6\" and \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_number_of_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select \"Economy/Coach\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.click_on_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "apply distance from Downtown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_distance_from_Downtown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "choose \"star3\", \"neighborhood1\" and \"guestRating35\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.choose_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that all filters have been applied",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_all_filters_have_been_applied()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "calculate discounted value if discount is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.calculate_discounted_value_if_discount_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select room with the lowest rate and capture the rate",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_room_with_the_lowest_rate_and_capture_the_rate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the first room that appears in \u0027Choose Your Room\u0027 section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.select_the_first_room_that_appears_in_section(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that \"Wed, Jul 07\" is the same as \"Actual Departure Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.verify_that_is_the_same_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "apply \"1 Stop\" filter and capture the number of flight available",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.apply_filter_and_capture_the_number_of_flight_available(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-R21286P5\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\VIKTOR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65031}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a6f460e592cd18579482c55f0c392b2c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.automation.utils.CommonMethods.takeScreenshot(CommonMethods.java:57)\r\n\tat com.stepDefinitions.Hooks.endTest(Hooks.java:21)\r\n",
  "status": "failed"
});
});