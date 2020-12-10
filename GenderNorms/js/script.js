//Reference Code from "Advanced Web Techniques Review Site" given by Santo Romano

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    }
  });
  scroll(loop);

}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 150 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// failed experiment trying to add textboxes through interactions

// var newBox = '  <article class="user textbox slideR sideR show-on-scroll">' +
//     '<div contenteditable="true">'+
//     '  <p> ( your answer )</p>' +
//   '  </div>' +
// '  </article>'
//
// function mousePressed(){
//
//   document.getElementById("newComment").innerHTML = newBox
// }
