window.addEventListener('DOMContentLoaded', () => {
    const $menuBtn = document.querySelector('#menuBtn');
    const $offCanvasNav = document.querySelector('.nav__list');
    const $overlay = document.querySelector('.overlay');
    const $header = document.querySelector('.js-header');
    const _submenuBtns = document.querySelectorAll('.nav__link_hasSubMenu');
    let scrollPrev = 0;

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrolled > 100 && scrolled > scrollPrev ?
            $header.classList.add('out') : $header.classList.remove('out');
        scrollPrev = scrolled;
    });

    const toggleMenu = (e) => {
        $menuBtn.classList.toggle('header__menu-button_active');
        $offCanvasNav.classList.toggle('nav__list_active');
        $overlay.classList.toggle('active');
        document.body.classList.toggle('menu_open');
        document.body.addEventListener('click', e => {
            if (e.target.classList.contains('overlay')) {
                toggleMenu()
            }
        });
    };

    _submenuBtns.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('nav__link_active');
        });
    });

    $menuBtn.addEventListener('click', () => toggleMenu());
});
