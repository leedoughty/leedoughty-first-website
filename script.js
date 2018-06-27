// positioning images randomly within a div
$(document).ready(function(){
  // sorting out the height and width of the div
  var position_div = $("div.container");
  var divWidth = position_div.width();
  var divHeight = divWidth*1;
  position_div.height(divHeight);
  // finding the images
  $(".container img").each(function(){
    var image = $(this);
    var xPos = Math.floor(Math.random()*divWidth);
    var yPos = Math.floor(Math.random()*divHeight);
    image.css("top", yPos + "px");
    image.css("left", xPos + "px");
    var websiteURL = image.attr("sid");
    if (websiteURL){
      image.click(function(){
        window.location.href = websiteURL;
      });
    }
  });
});
