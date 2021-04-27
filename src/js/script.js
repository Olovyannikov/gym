window.addEventListener('DOMContentLoaded', () => {
    const $menuBtn = document.querySelector('#menuBtn');
    const $offCanvasNav = document.querySelector('.nav__list');
    const _subMenuLinks = document.querySelectorAll('.nav__link_hasSubMenu');

    _subMenuLinks.forEach( item => {
        item.addEventListener('click', e => e.preventDefault())
    } )

    const toggleMenu = (e) => {
        $menuBtn.classList.toggle('header__menu-button_active');
        $offCanvasNav.classList.toggle('nav__list_active');
        document.body.classList.toggle('overlay');
        document.body.addEventListener('click', e => {
            if (e.target.classList.contains('overlay')) {
                toggleMenu()
            }
        })
    }

    $menuBtn.addEventListener('click', () => toggleMenu());
})
