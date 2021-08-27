const overlay = document.getElementById('js-overlay');
const menuButton = document.getElementById('js-menu-button');
const nav = document.getElementById('js-nav');
import Glide from "@glidejs/glide";

menuButton.addEventListener('click', function(){
  console.log('Button Clicked!')
  // toggle hidden class
  menuButton.classList.toggle('clicked');
  overlay.classList.toggle('hidden');
  nav.classList.toggle('hidden');
});

console.log("JS added!");

new Glide('.glide',
  {
    type: 'carousel',
    startAt: 1,
    gap: 24,
    autoplay: 5000,
    // hoverpause: true,
    // keyboard: true,
    throttle: 50,
    perView: 3,
    peek: -120,
    breakpoints: {
      1000: {
        perView: 2,
        peek: 0,
      },
      700: {
        perView: 1,
        peek: 0,
      },
      375: {
        perView: 1,
        peek: 0,
      }
    },
    classes: {
      // activeNav: "testimonials__controls__button--active",
      activeNav: "glide__bullet--active",
    }
  }
)
.mount()

if (module.hot) {
  module.hot.accept();
}