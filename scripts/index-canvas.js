let canvas = document.querySelector('#home-canvas');
let linkText = 'https://www.google.com';
const imageURL = ['../images/index/incahoots.png', '../images/index/nodulesofflint.png', '../images/index/preload.png', '../images/index/yume.jpg', '../images/index/billbot2.gif'];
const yumePage = '/pages/yume.html';

function on_click(e) {
    window.location = linkText;
    console.log(e);
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

for(i = 0; i < 5; i++) {
  make_base(imageURL[i], 300);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

randomNumber();

function make_base(source, width, url) {
  let base_image = new Image();
  base_image.src = source;
  const x = randomNumber(0, 1000);
  const y = randomNumber(0, 1000);
  base_image.onload = () => {
    ctx.drawImage(base_image, x, y, width, width * base_image.height / base_image.width);
  }
}
