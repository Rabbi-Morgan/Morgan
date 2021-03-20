document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.toggle-btn');


hamburger.addEventListener('click', () => {

var nav = document.querySelector('.navigation');
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

  var open = document.querySelector('.open');
var close = document.querySelector('.close');
  
});
});