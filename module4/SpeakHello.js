// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// Done

(function (window) {

  // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var helloSpeaker = {};
  var speakWord = "Hello";

  // STEP 4: Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  // See Lecture 52, part 2

  helloSpeaker.prototype.speak =
    function (name) {
      console.log(speakWord + " " + name);
    }

  window.helloSpeaker = helloSpeaker;

})(window);
