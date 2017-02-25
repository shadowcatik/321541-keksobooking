'use strict';

(function () {
  var pins = document.querySelectorAll('.pin');
  var pinMap = document.querySelector('.tokyo__pin-map');
  var ENTER_KEY_CODE = 13;

  function pinActive(pin) {
    pin.classList.add('pin--active');
    pin.setAttribute('aria-pressed', true);
  }

  function pinRemove() {
    for (var j = 0; j < pins.length; j++) {
      if (pins[j].classList.contains('pin--active')) {
        pins[j].classList.remove('pin--active');
        pins[j].setAttribute('aria-pressed', false);
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

  var focusActive = function () {
    pinActive.focus();
  };

  var openKeydown = function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      window.showCard(focusActive);
    }
  };

  pinMap.addEventListener('click', window.showCard);
  pinMap.addEventListener('keydown', openKeydown);

})();

