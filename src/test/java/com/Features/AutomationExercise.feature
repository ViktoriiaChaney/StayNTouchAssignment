#Author: Viktoriia Chaney
@smoke
Feature: Automation Exercise

Scenario Outline: Implement Automation Exercise
When a user navigates to www.hotels.com
Then verify the banner contains "Deals", "Things to do", "Packages & Flights", "Groups & Meetings", "Gift Cards", "List your property", "Hotels.com® Rewards"
Then click on "Packages & Flights"
Then select flight and hotel option
Then enter "<Origin City>"
And enter "<Destination City>" next
And select "<Departing>" and "<Returning>" dates
Then select number of "<Travelers>" and "<Rooms>"
Then select "<Airline Class>"
And click on Search Button
Then apply distance from Downtown
And choose "<Property Class>", "<Neighborhood>" and "<Guest Rating>"
Then verify that all filters have been applied
Then calculate discounted value if discount is present
Then select room with the lowest rate and capture the rate
Then select the first room that appears in 'Choose Your Room' section
Then verify that "<Expected Departure Date>" is the same as "Actual Departure Date"
Then apply "1 Stop" filter and capture the number of flight available

   Examples:
| Origin City   | Destination City | Departing  | Returning  | Travelers | Rooms | Airline Class   | Property Class | Neighborhood  | Guest Rating  | Expected Departure Date |
| Washington DC | Phoenix          | 03/22/2021 | 03/25/2021 | 1         |  1    | First class     | star5          | neighborhood1 | guestRating45 | Mon, Mar 22             |
| Phoenix       | Washington DC    | 04/11/2021 | 04/14/2021 | 2         |  1    | Business        | star4          | neighborhood2 | guestRating40 | Sun, Apr 11             |
| Miami         | Chicago          | 05/17/2021 | 05/20/2021 | 4         |  2    | Premium economy | star3          | neighborhood3 | guestRating35 | Mon, May 17             | 
| New York      | Los Angeles      | 06/12/2021 | 06/15/2021 | 5         |  3    | Economy/Coach   | star3          | neighborhood2 | guestRating35 | Sat, Jun 12             | 
| Los Angeles   | New York         | 07/07/2021 | 07/10/2021 | 6         |  3    | Economy/Coach   | star3          | neighborhood1 | guestRating35 | Wed, Jul 07             |

