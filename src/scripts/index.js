import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import swRegister from './utils/sw-register';
import App from './views/app';

console.log('Hello Coders! :)');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

const hero = document.querySelector('.hero');
hero.addEventListener('click', () => {
  app.drawer.classList.remove('open');
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// const menu = document.querySelector('#hamburgerButton');

// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', function (event) {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// main.addEventListener('click', function () {
//   drawer.classList.remove('open');
// });
