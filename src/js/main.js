import Glide from "@glidejs/glide";

const overlay = document.getElementById('js-overlay');
const menuButton = document.getElementById('js-menu-button');
const nav = document.getElementById('js-nav');
const registration_form = document.getElementsByClassName('js-registration-form')[0];
const email_input = registration_form.elements["email"];
const registration_form_error_message = document.querySelector('.registration-form__error-message');

menuButton.addEventListener('click', function(){
  console.log('Button Clicked!')
  // toggle hidden class
  menuButton.classList.toggle('clicked');
  overlay.classList.toggle('hidden');
  nav.classList.toggle('hidden');
});

registration_form.addEventListener('submit', (e) => {
  e.preventDefault();  

  if(!email_input.validity.valid) {
    console.log("Form is invalid");
    showError();
    // add form submission logic here
  } else {
    console.log('submitted');
  }
});

email_input.addEventListener('input', () => {
  if(!email_input.validity.valid) {
    // console.log("Input is invalid");
    showError();
  } else {
    // console.log("Input is valid");
    registration_form_error_message.classList.remove("show");
    registration_form.classList.remove('registration-form--error');
  }
});

function showError() {
  registration_form_error_message.classList.add("show");
  registration_form.classList.add('registration-form--error');
}

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