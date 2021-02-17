
$(document).ready(function() {
  //console.log('ready');

  $('#testButton').on('click', function() {
    getData();
  });

  $('#testButton2').on('click', function() {
    getJSONData();
  });

});

function getData() {

  $.get('data/data.txt', function(result) {
    //console.log(result);

    $("#ajaxTestTag").text(result);
  });

}

function getJSONData() {
  $.get('data/data.json', function(result) {
    console.log(result);

    $("#jsonTestTag").text('check console to view JSON result!');
  });
}
