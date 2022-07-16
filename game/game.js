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

// Create a global variable, start, to store the starting time for each new shape
let start; // store the start time when a shape appears
const shape = document.getElementById("shape");

function makeShape() {
  console.log("starting function makeShape...");

  //   1. create a new shape
  // 1. set random position
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  // i.e. if window's height and width are 600px and 800px, the range for left top cornor will be (0, 300px) and (0, 650px)
  const top = Math.random() * (windowHeight - 150 - 150); // to avoid the top content
  const left = Math.random() * (windowWidth - 150);

  console.log(top, left);

  shape.style.top = top + "px";
  shape.style.left = left + "px";
  // 2. random color
  const color = createRandomColor();
  console.log(color);
  shape.style.backgroundColor = color;
  // 3. random shape - circle or square
  if (Math.random() < 0.5) {
    shape.style.borderRadius = "50%";
  } else {
    shape.style.borderRadius = "0";
  }
  // 4. random size
  const randomLength = Math.random() * 100 + 50;
  shape.style.width = randomLength + "px";
  shape.style.height = randomLength + "px";

  // 2. display the shape -  set style.display = "block";
  shape.style.display = "block";

  // 3. record the time - create a new Date object, assign it to the global variable start
  start = new Date().getTime();
}

document.querySelector("button").onclick = function () {
  makeShape();
};

function displayReaction() {
  console.log("starting function displayReaction");
  // 1. get the end time - create a new Date object (new Date()), and assign it to a variable end
  const end = new Date().getTime();
  // 2. calculate the duration in seconds: duration = (end - start)/1000
  const duration = (end - start) / 1000;
  // 3. display the duration - use innerHTML/innerText
  document.getElementById("timeTaken").textContent = duration + "s";
  // 4. make the shape disappear
  shape.style.display = "none";
  // 5. create a variable, randomWaitingTime which is a random number in range (1000, 5000), call function makeShape
  const randomWaitingTime = Math.random() * 4000 + 1000;
  setTimeout(makeShape, randomWaitingTime);
}

shape.addEventListener("click", displayReaction);

function createRandomColor() {
  // return a random color with random RGB values;
  const red = Math.floor(Math.random() * 256); // random integer [0, 255]
  const green = Math.floor(Math.random() * 256); // random integer [0, 255]
  const blue = Math.floor(Math.random() * 256); // random integer [0, 255]
  const color = "rgb(" + red + ", " + green + ", " + blue + ")";
  // rgb(0, 100, 100)
  return color;
}
