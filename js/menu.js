(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-header__open'),
    closeMenuBtn: document.querySelector('.mobile-menu-header__close'),
    menu: document.querySelector('.mobile-menu-header'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();