
$(document).ready(function() {
  console.log('ready');

  $('#testButton').on('click', function() {
    getData();
  });

  $('#testButton2').on('click', function() {
    getJSONData();
  });

});

function getData() {
  $.get('data/data.txt', function(result) {
    console.log(result);
  });
}

function getJSONData() {
  $.get('data/data.json', function(result) {
    console.log(result);
  });
}
