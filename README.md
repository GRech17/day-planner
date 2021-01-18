# Third-Party APIs Challenge: Work Day Scheduler



### Link to App
https://grech17.github.io/day-planner/
 
### What User Asked
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
### Accepted Criteria 
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


### Application Contents/Description
``
Given passed down starter code, I've refactored a simple calendar application that allows a user to save events for each hour of the day. I have done this by creating a local storage area that stores time events for the day using jQuery and using moment.js to check whether the time for those events has past or not. I also created an event object for each of the times throughout the day to call data to or save data from. 
``

### Screenshot
<img src = "assets\screenshot.jpeg.jpg" alt = "planner preview">
