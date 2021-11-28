(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  const jumpLinks = document.querySelectorAll("a.mobile-menu__link[href^='#']");

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('mobile-menu_hidden');
    document.body.classList.toggle('noscroll');
  }
  
  jumpLinks.forEach(link => {
    link.addEventListener('click', event => {
      refs.modal.classList.toggle('mobile-menu_hidden');
      document.body.classList.toggle('noscroll');
   });
  });
  
})();