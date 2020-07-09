import './styles/index.scss';

import './scripts/card';
import './scripts/graph';

document.addEventListener("DOMContentLoaded", () => {
  const modalBackground = document.querySelector(".modal-background");
  const modalChild = document.querySelector(".modal-child");

  modalBackground.classList.remove('hidden');

  modalBackground.addEventListener("click", () => {
    modalBackground.classList.add('hidden');
  });

  modalChild.addEventListener('click', e => e.stopPropagation());
})