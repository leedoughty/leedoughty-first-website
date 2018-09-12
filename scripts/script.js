// if (window.innerWidth > 800) {


var works = [];
var position_div;
var divWidth;
var divHeight;

class Work {

  constructor(img) {
    this.img = img;
    this.width = this.img.width();
    this.height = this.img.height();
  }

  choosePosition() {
    let count = 0;
    var intersecting = true;
    while (intersecting === true && count < 500 ) {
      count++;
      intersecting = false;
      var xPos = Math.floor(Math.random()*(divWidth/1.2-this.width));
      var yPos = Math.floor(Math.random()*(divHeight-this.height));
      this.left = xPos;
      this.right = xPos + this.width;
      this.top = yPos;
      this.bottom = yPos + this.height;
      let l = works.length;
      for (var i=0; i<l; i++) {
        let rect = works[i];
        if(rect!=this && this.intersect(rect)){
          intersecting = true;
        };
      }
      console.log(intersecting);
    }
    console.log(count);
    this.place(xPos, yPos);
  }

  place(xPos, yPos){
    this.x = xPos;
    this.y = yPos;
    this.img.css("top", yPos + "px");
    this.img.css("left", xPos + "px");
    var websiteURL = this.img.attr("sid");
    if (websiteURL){
      this.img.click(function(){
        window.location.href = websiteURL;
      });
    }
  }

  intersect(rect) {
      return !(rect.left > this.right ||
               rect.right < this.left ||
               rect.top > this.bottom ||
               rect.bottom < this.top);
  }
}
// }
