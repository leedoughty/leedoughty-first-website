let loader = function(title, bio, img) {
  $("#head-block").load("../pages/template.html", function(){
  });
}

const isChrome = () => sUsrAg.indexOf;
let sUsrAg = navigator.userAgent;
let works = [];
let position_div;
let divWidth;
let divHeight;
let resizedWindow;

class Work {
  constructor(img) {
    this.img = img;
    this.width = this.img.width();
    this.height = this.img.height();
  }

  // choose a random position inside the div in which to play the work images
  choosePosition() {
    let count = 0;
    var intersecting = true;
    while (intersecting === true && count < 500) {
      count++;
      intersecting = false;
      var xPos = Math.floor(Math.random() * (divWidth / 1.2 - this.width));
      var yPos = Math.floor(Math.random() * (divHeight - this.height));
      this.left = xPos;
      this.right = xPos + this.width;
      this.top = yPos;
      this.bottom = yPos + this.height;
      let l = works.length;
      for (var i = 0; i < l; i++) {
        let rect = works[i];
        if (rect != this && this.intersect(rect)) {
          intersecting = true;
        }
      }
    }
    this.place(xPos, yPos);
  }

  // find a random place in the x and y positions
  place(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.img.css("top", yPos + "px");
    this.img.css("left", xPos + "px");
    var websiteURL = this.img.attr("sid");
    if (websiteURL) {
      this.img.click(function() {
        window.location.href = websiteURL;
      });
    }
  }

  intersect(rect) {
    return !(
      rect.left > this.right ||
      rect.right < this.left ||
      rect.top > this.bottom ||
      rect.bottom < this.top
    );
  }

  reset() {
    this.img.css("top", "auto");
    this.img.css("left", "auto");
  }
}

function getDimensions(element) {
  return [element.width(), element.height()];
}

$(document).ready(initLayout);

const desktop = window.matchMedia("(min-width: 800px)");
window.onresize = function() {
  clearTimeout(resizedWindow);
  resizedWindow = setTimeout(() => {
    if (desktop.matches) {
      for (var i = 0; i < works.length; i++) {
        let work = works[i];
      const [divWidth, divHeight] = getDimensions(position_div);
        work.choosePosition();
      }
    }
  }, 500);
};

function initLayout() {
  loader();
  position_div = $("div.container");

  divWidth = position_div.width();
  divHeight = position_div.height();

  if (desktop.matches) {
    $(".container img").each(function() {
      let work = new Work($(this));
      works.push(work);
      work.choosePosition();
    });
  }
  const mqlMobile = window.matchMedia("(max-width: 800px)");
  mqlMobile.addListener(function(mql) {
    if (mql.matches) {
      for (var i = 0; i < works.length; i++) {
        let work = works[i];
        work.reset();
      }
    }
  });
}
