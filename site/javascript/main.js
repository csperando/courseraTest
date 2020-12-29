
$(document).ready(function(){
  console.log("ready")

  $("#menuClose").on("click", function() {
    $(".menu").css("display", "none")
    $("#menuOpen").css("display", "block")
  })

  $("#menuOpen").on("click", function() {
    $(this).css("display", "none")
    $(".menu").css("display", "block")
  })

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
  // console.log(y)
  if(y >= 210 && y < 230) {
    // console.log("sticky")
    $("#simple").css("color", "black")
    $("#functional").css("color", "gray")
    $("#responsive").css("color", "gray")
  }
  else if (y >= 230 && y < 250) {
    $("#simple").css("color", "gray")
    $("#functional").css("color", "black")
    $("#responsive").css("color", "gray")
  }
  else if (y >= 250 && y < 1000) {
    $("#simple").css("color", "gray")
    $("#functional").css("color", "gray")
    $("#responsive").css("color", "black")
  }
  else {
    $("#simple").css("color", "gray")
    $("#functional").css("color", "gray")
    $("#responsive").css("color", "gray")
  }
}
