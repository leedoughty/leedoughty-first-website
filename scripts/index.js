// positioning images randomly within a div

// $(document).ready(function(){
//   loader();
//   $(window).on('resize',function() {
//     if (window.innerWidth > 800) {
//       // sorting out the height and width of the div
//       position_div = $("div.container");
//       divWidth = position_div.width();
//       divHeight = position_div.height();
//       // position_div.height(divHeight);
//       // finding the images
//       $(".container img").each(function(){
//         let work = new Work($(this));
//         works.push(work);
//         work.choosePosition();
//       })
//     };
//   });
// });

//create own function

//look at timeout (seconds to stop javascript) look at refactoring)

$(document).ready(initLayout);
$(window).on('resize', initLayout);

function initLayout() {
  loader();
  if (window.innerWidth > 800) {
    // sorting out the height and width of the div
    position_div = $("div.container");
    divWidth = position_div.width();
    divHeight = position_div.height();
    // position_div.height(divHeight);
    // finding the images
    $(".container img").each(function(){
      let work = new Work($(this));
      works.push(work);
      work.choosePosition();
    });
  }
}
