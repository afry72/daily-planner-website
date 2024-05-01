# daily-planner-website

## Purpose
this project is a daily planner you can use to create a short term to do list 
you can put your tasks inside an hour block and hit the save button and it will save it to local storage
the planner keeps track of time and will change the color of individual hours depending on time of day


## Challenges
there was several extremely difficult things i had to figure out during the process of coding this website

The first challenge i ran into was figuring out the ins and outs of jquery what trying to figure out what it could and couldnt do and then figuring out how to modify or manipulate the data i could grab

the second big problem i had was figuring out dayJS. despite having some prior knowledge on the api i was still struggling to figure out how it wanted to be formatted and i found the documentation to be lacking in clarity.

the biggest problem i had during coding was creating the function to change the colors of hour blocks dependent on time whenever the page loaded. i ended up making a function that would check every hour block depending on the value attatched to the block and the value coming from dayJS

## Comments
the purpose of this project was to teach how to use APIs and object manipulation within the dom
this project was also a great way too practice and learn about jquery and how much easier it makes javascript coding

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```