var thumbnail;
var container;
var contentTitle;
var contentDescription;
var contentImage;

function init() {
  container = document.getElementById("container");
  thumbnail = document.getElementById("thumbnail1");
  contentTitle = document.getElementById("content-title");
  contentDescription = document.getElementById("content-description");
  contentImage = document.getElementById("content-image");
  thumbnail.onclick = click;
  console.log(container);
  container.onclick = toggleContainer;
}

function toggleContainer() {
  container.classList.toggle("hidden");
}

function click() {
  console.log("clicked");
  // container.style.display = "block";
  toggleContainer();
  contentTitle.innerHTML = "test";
  contentDescription.innerHTML = "testtesttest";
  contentImage.src = "../images/kheyameya.jpg";
}
