import data from './data.js';
import speakerGenerator from './speakerCrtn.js';

// For modal activation
const actvtMdl = document.getElementById('hamburger-menu');
const dctvtMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const modal = document.querySelector('.modalcpst');
const extBtn = document.getElementById('exit-button'); // For modal exit button
const mdlLks = document.querySelectorAll('.modal__navigation__li');

actvtMdl.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.add('stop-scrolling');
  modal.classList.remove('display-none');
  dctvtMenu.classList.add('display-none');
});

extBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.remove('stop-scrolling');
  modal.classList.add('display-none');
  dctvtMenu.classList.remove('display-none');
});

for (let i = 0; i < mdlLks.length; i += 1) {
  mdlLks[i].addEventListener('click', (event) => {
    event.stopPropagation();
    body.classList.remove('stop-scrolling');
    modal.classList.add('display-none');
    dctvtMenu.classList.remove('display-none');
  });
}

// Now lets generate the speakers
const cardsContainer = document.getElementById('speaker-container');

data.forEach((element) => {
  cardsContainer.appendChild(speakerGenerator(element));
});