// Get the length of the path
var path = document.querySelector("#line");
var length = path.getTotalLength();

// Set up the dash array and dash offset to create the drawing effect
path.style.transition = path.style.WebkitTransition = "none";
path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;
path.getBoundingClientRect(); // Trigger reflow
path.style.transition = path.style.WebkitTransition =
  "stroke-dashoffset .2s ease-in-out";

// Animate the drawing effect on scroll
window.addEventListener("scroll", function () {
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  var drawLength = length * scrollPercentage;
  path.style.strokeDashoffset = length - drawLength;
});