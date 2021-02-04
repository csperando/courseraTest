
$(document).ready(function(){
  console.log("ready")

  $(document).on("scroll", function() {
    var y = window.scrollY;
    scrollStyles(y);

    if(y > 210) {
      // show back to top
    }
    else {

    }
  })

})


function scrollStyles(y) {
  if(y >= 210) {
    $("#backToTop").css("display", "block")
  }
  else {
    $("#backToTop").css("display", "none")
  }
}
