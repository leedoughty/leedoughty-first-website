let canvas = document.querySelector('#viewport');
let ctx = canvas.getContext('2d');


make_base('../images/preload/work2.jpg');
make_base('../images/preload/work1.jpg');

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
