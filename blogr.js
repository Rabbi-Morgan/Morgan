



//document.addEventListener('DOMContentLoaded', function () {

var hamburger = document.querySelector('.toggle-btn');



hamburger.addEventListener('click', () => {

var nav = document.querySelector('.navigation');
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

});

   // open hamburger toggle 
   var open = document.querySelector('.open');
var close = document.querySelector('.close');

hamburger.addEventListener('click', () => {

open.classList.toggle('display')
close.classList.toggle('display')
});

var dropBtn = document.querySelectorAll('.dropbtn');
var nav = document.querySelectorAll('.drop-items');

var arrow = document.querySelectorAll('.arrow');

// body stable 
 dropBtn.forEach((button, idx) => {
   button.addEventListener('click', () => {
      if (nav[idx].style.display === "block") {
        nav[idx].style.display = "none";
      } else {
        nav[idx].style.display = "block";
    }

    arrow[idx].classList.toggle('rotate')

 });
});

// dropBtn.forEach((button, idx) => {
//   button.addEventListener('click', () => {
//      nav[idx].classList.toggle('.display')
//    arrow[idx].classList.toggle('rotate')

// });
// });
   
 

// for (i = 0; i < dropBtn.length; i++){
//   dropBtn[i].addEventListener('click', () => {

//     for (i = 0; i < nav.length; i++) {
//       if (nav[i].style.display === "block") {
//         nav[i].style.display = "none";
//       } else {
//         nav[i].style.display = "block";
//       }; 
//     }
      
//   });
// }


// dropBtn.forEach(btn => {
//   btn.addEventListener('click', () => {

//     var nav = document.querySelector('.drop-items');
//       if (nav.style.display === "block") {
//         nav.style.display = "none";
//       } else {
//         nav.style.display = "block";
//       }; 
//   });
// });