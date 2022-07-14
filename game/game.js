/*
Goal: Create a game that records the reaction time (between the timestamp when shape is created and the timestamp when shape is clicked)

Create a global variable, start, to store the starting time for each new shape

1. create a function - makeShape() - generate a random shape, display it on the screen, record the start

    1. create a new shape
        1. set random position
        2. random color
        3. random shape - circle or square
        4. random size
    2. display the shape -  set style.display = "block";
    3. record the time - create a new Date object, assign it to the global variable start

Clicking on the button (or after waitingTime after click) triggers makeShape() - creating shape with something random and record the start time


2. create a function displayReaction() - record the end time, calculate the duration, display the duration, create a new shape after random waiting time

    1. get the end time - create a new Date object (new Date()), and assign it to a variable end
    2. calculate the duration in seconds: duration = (end - start)/1000
    3. display the duration - use innerHTML/innerText
    4. make the shape disappear
    5. create a variable, randomWaitingTime which is a random number in range (1000, 5000), call function makeShape
    setTimeout(makeShape, randomWaitingTime)




Clicking on the shape triggers  - record the end time, calculate the duration, display the duration, create new shape after random waiting time

*/

