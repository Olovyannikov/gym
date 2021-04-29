//import modules
import {gsap} from "gsap";
//import { default as bezier } from "./vendor/bezier";
import startAnimation from "./modules/start-animation";
import {default as toggleMenu} from "./modules/menu-toggle";

const init = () => {
    window.onload = function () {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader-animation');

        setTimeout(() => {
            preloader.classList.remove('preloader-animation');
            preloader.classList.add('preloader-hidden');
        }, 3000);
        setTimeout(() => {
            startAnimation();
            toggleMenu();
            preloader.classList.add('preloader-none');
        }, 3200);
    }


}

init();