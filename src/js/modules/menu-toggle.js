export default () => {
    const $menuBtn = document.querySelector('#menuBtn');
    const $offCanvasNav = document.querySelector('.nav__list');
    const $overlay = document.querySelector('.overlay');
    function toggleMenu() {
        $menuBtn.classList.toggle('header__menu-button_active');
        $offCanvasNav.classList.toggle('nav__list_active');
        $overlay.classList.toggle('active');
        document.body.classList.toggle('menu_open');
        document.body.addEventListener('click', e => {
            if (e.target.classList.contains('overlay')) {
                toggleMenu();
            }
        });
    }
    $menuBtn.addEventListener('click', () => toggleMenu());
}
