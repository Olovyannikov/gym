import {accordion} from "./accordion";

const startAnimation = () => {
    accordion();
    const $header = document.querySelector('.js-header');
    let scrollPrev = 0;

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrolled > 100 && scrolled > scrollPrev ?
            $header.classList.add('out') : $header.classList.remove('out');
        scrollPrev = scrolled;
    });
}
export default startAnimation;
