(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacts-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacts-close]'),
    modal: document.querySelector('[data-modal-contacts]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacts-btn-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacts-btn-close]'),
    modal: document.querySelector('[data-modal-contacts-btn]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
