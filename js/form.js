'use strict';

var pins = document.querySelectorAll('.pin');
var pinOne = document.querySelector('.pin');
var pinMap = document.querySelector('.tokyo__pin-map');
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var title = document.getElementById('title');
var price = document.getElementById('price');
var address = document.getElementById('address');
var time = document.getElementById('time');
var timeOut = document.getElementById('timeout');
var type = document.getElementById('type');
var roomNumber = document.getElementById('room_number');
var capacity = document.getElementById('capacity');
var ENTER_KEY_CODE = 13;

function pinActive(pin) {
    pin.classList.add('pin--active');
    dialog.style.display = 'block';
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
    pinRemove()
    pinActive(targetParent);
  } else if (target.classList.contains('pin')) {
    pinRemove()
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
  if (pinOne.classList.contains('pin--active')) {
    pinOne.classList.remove('pin--active');
  }
});

title.required = true;
title.minLength = 30;
title.maxLength = 100;

price.required = true;
price.min = 1000;
price.max = 1000000;

address.required = true;

function CustomValidation() {
  var validity = price.validity;
  if (validity.rangeOverflow) {
    var max = price.max;
    price.setCustomValidity('The maximum value should be ' + max);
  }

  if (validity.rangeUnderflow) {
    var min = price.min;
    price.setCustomValidity('The minimum value should be ' + min);
  }
}

price.addEventListener('change', CustomValidation);

time.addEventListener('click', function () {
  timeOut.value = time.value;
});

timeOut.addEventListener('click', function () {
  time.value = timeOut.value;
});

type.addEventListener('click', function () {
  if (type.value === 'apartment') {
    price.placeholder = '1000';
  } else if (type.value === 'shack') {
    price.placeholder = '0';
  } else if (type.value === 'palace') {
    price.placeholder = '10000';
  }
});

roomNumber.addEventListener('click', function () {
  if (roomNumber.value === '1') {
    capacity.value = 'not guest';
  } else if (roomNumber.value === '2' || roomNumber.value === '100') {
    capacity.value = '3';
  }
});

capacity.addEventListener('click', function () {
  if (capacity.value === 'not guest') {
    roomNumber.value = '1';
  } else if (capacity.value === '3') {
    roomNumber.value = '2';
  }
});
