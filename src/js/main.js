const overlay = document.getElementById('js-overlay');
const menuButton = document.getElementById('js-menu-button');
const nav = document.getElementById('js-nav');

menuButton.addEventListener('click', function(){
  console.log('Button Clicked!')
  // toggle hidden class
  menuButton.classList.toggle('clicked');
  overlay.classList.toggle('hidden');
  nav.classList.toggle('hidden');
});

console.log("JS added!");