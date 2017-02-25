'use strict';

window.showCard = (function () {
  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');
  var onCardClose = null;

  function openCard() {
    dialog.style.display = 'block';
    dialog.setAttribute('aria-hidden', false);
  }

  function closeCard() {
    dialog.setAttribute('aria-hidden', true);
    dialog.style.display = 'none';
    dialogClose.removeEventListener('click', closeCard);
    dialogClose.removeEventListener('keydown', hideCard);
  }

  var hideCard = function () {
    closeCard();

    if (typeof onCardClose === 'function') {
      onCardClose();
    }
  };

  return function (cb) {
    openCard();
    dialogClose.addEventListener('click', closeCard);
    dialogClose.addEventListener('keydown', hideCard);

    onCardClose = cb;
  };
})();
