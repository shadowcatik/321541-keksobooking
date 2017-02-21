'use strict';

window.initializePins = (function () {
  var pins = document.querySelectorAll('.pin');
  var pinMap = document.querySelector('.tokyo__pin-map');
  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');
  var ENTER_KEY_CODE = 13;

  function pinActive(pin) {
    pin.classList.add('pin--active');
    dialog.style.display = 'block';
    dialog.setAttribute('aria-hidden', false);
    pin.setAttribute('aria-pressed', true);
  }

  function pinRemove() {
    for (var j = 0; j < pins.length; j++) {
      if (pins[j].classList.contains('pin--active')) {
        pins[j].classList.remove('pin--active');
        pins[j].setAttribute('aria-pressed', false);
        dialog.setAttribute('aria-hidden', true);
      }
    }
  }

  pinMap.addEventListener('click', function (event) {
    var target = event.target;
    if (target.parentNode.classList.contains('pin')) {
      var targetParent = target.parentNode;
      pinRemove();
      pinActive(targetParent);
    } else if (target.classList.contains('pin')) {
      pinRemove();
      pinActive(target);
    }
  });

  pinMap.addEventListener('keydown', function (e) {
    var target = e.target;
    if (e.keyCode === ENTER_KEY_CODE) {
      pinActive(target);
    }
  });

  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
    pinRemove();
  });
})();

