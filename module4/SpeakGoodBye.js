
(function (window) {

  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.prototype.speak = function () {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
