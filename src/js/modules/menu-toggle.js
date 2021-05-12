export default () => {
  const $menuBtn = document.querySelector('#menuBtn');
  const $offCanvasNav = document.querySelector('.nav__list');
  const $overlay = document.querySelector('.overlay');
  const _submenuBtns = document.querySelectorAll('.nav__link_hasSubMenu');

  function toggleMenu() {
    $menuBtn.classList.toggle('header__menu-button_active');
    $offCanvasNav.classList.toggle('nav__list_active');
    $overlay.classList.toggle('active');
    document.body.classList.toggle('menu_open');
  }

  _submenuBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      $menuBtn.classList.add('header__menu-button_active');
      $offCanvasNav.classList.add('nav__list_active');
      $overlay.classList.add('active');
      document.body.classList.add('menu_open');
      button.classList.toggle('nav__link_active');
    });
  });

  $overlay.addEventListener('click', e => {
    if(e.target.classList.contains('active')) {
      _submenuBtns.forEach(btn => btn.classList.remove('nav__link_active'))
      $menuBtn.classList.remove('header__menu-button_active');
      $offCanvasNav.classList.remove('nav__list_active');
      $overlay.classList.remove('active')
      document.body.classList.remove('menu_open');
    }
  })

  $menuBtn.addEventListener('click', () => toggleMenu());
}
