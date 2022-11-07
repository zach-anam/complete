function userAge() {
  var ageUser, age;
  ageUser = prompt("Enter your age please?");
  age = parseInt(ageUser);

  if (ageUser < 18) {
    alert("Not Allowed to view this page go somewhere else");
  }
  else {
    alert("Welcome aboard :)");
  }
}
// ---------------Toggle Dark Mode 
const themeToggle = document.querySelector('.checkbox');
const body = document.querySelector('body');
const darkMode = localStorage.getItem('dark');

if(darkMode){
  body.classList.add('dark');
  themeToggle.checked = true;
}
themeToggle.addEventListener('change', function(){
  body.classList.toggle('dark');
  if(body.classList.contains('dark')){
    localStorage.setItem('dark', 'active');
  }
  else {
    localStorage.removeItem('dark');
  }
})


// (function($){
//   "use strict";
//   $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });

// }) (jQuery);

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//---------------------- Scroller 
const scrollTop = document.querySelector(".scrollTop");
scrollTop.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",

  });
});

window.addEventListener('scroll', function(){
  if (window.scrollY >= 10) {
    scrollTop.style.opacity  = 1;
  }
  else {
    scrollTop.style.opacity  = 0;
  }
});



