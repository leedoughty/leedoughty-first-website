// let imageNames = ['../images/preload/preload3.gif', '../images/preload/preload2.gif'];
// let images = [];
//
// imageNames.forEach(function(name){
//   image = new Image();
//   image.src = name;
//   images.push(image);
// })

let canvas = document.querySelector('#viewport');

canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

// make_base('../images/preload/preload3.gif');
// make_base('../images/preload/preload2.gif');
// make_base()

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumber(500, 1000));

randomNumber();

function make_base(source) {
  base_image = new Image();
  base_image.src = source;
  // offsetTop? offsetBottom
  const x = randomNumber(0, 500);
  const y = randomNumber(0, 1000);
  const width = 200;
  base_image.onload = () => {
    ctx.drawImage(base_image, x, y, width, base_image.height * (200/base_image.width));
  }
}
