var loader = function(title, bio, div, img) {
  $("#head-block").load("../pages/template.html", function() {
    $("#title").text(title);
    $("#project-bio-container").text(bio);
    $("#theDiv").prepend('<img id="' + div + '" src=' + img + ">");
  });
};
