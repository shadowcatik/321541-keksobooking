window.showCard = (function () {
  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');
  var ENTER_KEY_CODE = 13;
  var onCardClose = null;
  debugger;

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

  var hideCard = function() {
    closeCard();

    if (typeof onCardClose === 'function') {
      onCardClose();
    }
  }

  return function (cb) {
    openCard();
    dialogClose.addEventListener('click', closeCard);
    dialogClose.addEventListener('keydown', hideCard);

    onCardClose = cb;
  }
})();
