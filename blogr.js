document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.toggle-btn');


hamburger.addEventListener('click', () => {
    var open = document.querySelector('.open');
// var close = document.querySelector('.close');
var nav = document.querySelector('.navigation');
  if (open.style.display === "block") {
    open.style.display = "none";
  } else {
    open.style.display = "block";
  }
//   if (close.style.display === "block") {
//     close.style.display = "none";
//   } else {
//     close.style.display = "block";
//   }
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  
});
});