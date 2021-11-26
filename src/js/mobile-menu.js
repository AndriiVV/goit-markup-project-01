(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  const jumpLinks = document.querySelectorAll("a[href^='#']");

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('mobile-menu_hidden');
  }
  
  jumpLinks.forEach(link => {
    link.addEventListener('click', event => {
      refs.modal.classList.toggle('mobile-menu_hidden');
   });
  });
  
})();