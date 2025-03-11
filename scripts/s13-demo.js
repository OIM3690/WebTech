function changeBackgroundColor() {
    const bgColors = ["green", "yellow", "blue", "pink", "red", "orange"];
    const n = bgColors.length;
    const randIndex = Math.floor(Math.random() * n);
    const body = document.querySelector("body");
    body.style.backgroundColor = bgColors[randIndex];
    // body.style.color = "red";
  }

  document.querySelector("h1").onclick = function () {
    changeBackgroundColor();
  };

  function enlargeImage() {
    // const myImg = document.getElementById("img-mailbox");
    const myImg = document.querySelector("#img-mailbox");
    let w = myImg.width;
    w = w + 30;
    myImg.width = w;
  }
  document.querySelector("img").addEventListener("mouseover", function () {
    enlargeImage();
  });

  function c() {
    window.alert("Haha!");
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  }