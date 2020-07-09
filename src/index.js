import './styles/index.scss';

import './scripts/card';
import './scripts/graph';

document.addEventListener("DOMContentLoaded", () => {
  const modalBackground = document.createElement("div");
  const modalChild = document.createElement("div");

  modalBackground.classList.add('modal-background');
  modalChild.classList.add('modal-child');

  document.querySelector('body').append(modalBackground);
  modalBackground.append(modalChild);

  modalBackground.addEventListener("click", () => {
    modalBackground.style.display = 'none';
  });

  modalChild.addEventListener('click', e => {
    e.stopPropagation();
  });
})