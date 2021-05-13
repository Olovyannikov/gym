//import modules
import gsap from "gsap";
import bezier from "./vendor/bezier";
import {default as menu} from './modules/menu-toggle';

bezier();
import startAnimation from "./modules/start-animation";

const init = () => {
  window.onload = function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-animation');
    document.body.classList.add('overflow');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-hidden');
      document.body.classList.remove('overflow');
    }, 3000);
    setTimeout(() => {
      startAnimation();
      menu();
      preloader.classList.add('preloader-none');
    }, 3200);
  }
}

init();
