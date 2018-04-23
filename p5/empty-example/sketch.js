// var s = "Under Construction";
var s = document.getElementById("name");

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(229, 229, 229);
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  fill(r, 0, b);
  textSize(50);
  text(s, windowWidth/4, windowHeight/4);
}
