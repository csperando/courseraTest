
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
  
})
