(() => {
  const refs = {
    openModalBtn: document.querySelector('[backdrop-open]'),
    closeModalBtn: document.querySelector('[backdrop-close]'),
    modal: document.querySelector('[backdrop-modal]'),
  };

  const jumpLinks = document.querySelectorAll("a.mobile-menu__link[href^='#']");

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('mobile-backdrop_hidden');
    
  }
  
  jumpLinks.forEach(link => {
    link.addEventListener('click', event => {
      refs.modal.classList.toggle('mobile-backdrop_hidden');
    
   });
  });
  
})();