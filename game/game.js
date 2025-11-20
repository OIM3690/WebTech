/* Psuedo-Code

Prepare:

How to get start time?
new Date().getTime()
How to record reaction time?

How to get a random number for RGB value?
[0, 255]
How to create a random width [50, 200]



create a global variable: start

makeShape() - generate a random shape, and display it on the screen, get the start time
    1. create shape
        1. random position
            - set left and top to be a random integer
            - we might need to use window.innerHeight and window.innerWidth
        2. random size
        3. random color
        4. random shape (circle/box?)
    2. display this shape - set display to block
    3. access new start time and assign it to variable start

displayReaction() - calculate the reaction time and display it, repeat makeShape
    1. get the end time
    2. reaction time = end - start
    3. display reaction time - use innerHTML/innerText
    4. ? make the shape disappear - set display to none
    5. setTimeout(makeShape, randomWaitingTime)


Clicking on the button triggers makeShape

Clicking on the shape triggers the displayRecation

*/

// create a global variable: start
let start;
const shape = document.getElementById("shape");

function makeShape() {
  //makeShape() - generate a random shape, and display it on the screen, get the start time
  //1. create shape
  //1. random position
  //    - set left and top to be a random integer
  //    - we might need to use window.innerHeight and window.innerWidth

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const t = Math.random() * (windowHeight - 150 - 150);
  const l = Math.random() * (windowWidth - 150);
  shape.style.top = t + "px";
  shape.style.left = l + "px";

  // 2. random size
  const side = Math.random() * 100 + 50;
  shape.style.height = side + "px";
  shape.style.width = side + "px";
  //3. random color
  shape.style.backgroundColor = generateRandomColor();

  //4. random shape (circle/box?)
  // 50% chance get a circle, 50% chance to get a box
  if (Math.random() > 0.5) {
    shape.style.borderRadius = "50%"; // a circle
  } else {
    shape.style.borderRadius = "0"; // a square/box
  }

  //2. display this shape - set display to block

  shape.style.display = "block";
  //3. get start time (new Date().getTime())

  start = new Date().getTime();
  console.log(start);
}

// Clicking on the button triggers makeShape

document.querySelector("#start").onclick = startGame;

function startGame() {
  makeShape();
  document.querySelector("#start").style.display = "none";
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}

function showReaction() {
  // 1. get end time
  let end = new Date().getTime();

  // 2. duration = end - start
  let duration = (end - start) / 1000;

  // 3. display the duration
  //       get the span (#timeTaken), use innerText to show the duration
  document.getElementById("timeTaken").innerHTML = duration + "s";

  // 4. make the shape disappear
  //        set .style.display="none"
  shape.style.display = "none";

  // 5. create another random shape
  //       set a random delay
  setTimeout(makeShape, Math.random() * 3000);
}

shape.onclick = showReaction;
