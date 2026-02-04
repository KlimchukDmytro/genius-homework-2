const model = document.querySelector('.beckdrop');
const modelBtnOpen = document.querySelector('.model-btn-open');
const modelBtnClose = document.querySelector('.model-btn-close');

const toggleModal = () => model.classList.toggle('is-hidden');

modelBtnOpen.addEventListener('click', toggleModal);
modelBtnClose.addEventListener('click', toggleModal);
