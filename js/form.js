'use strict';

(function () {
  var title = document.getElementById('title');
  var price = document.getElementById('price');
  var address = document.getElementById('address');
  var time = document.getElementById('time');
  var timeOut = document.getElementById('timeout');
  var type = document.getElementById('type');
  var roomNumber = document.getElementById('room_number');
  var capacity = document.getElementById('capacity');

  title.required = true;
  title.minLength = 30;
  title.maxLength = 100;

  price.required = true;
  price.min = 1000;
  price.max = 1000000;

  address.required = true;

  window.synchronize(type, price, ['apartment', 'shack', 'palace'], ['1000', '0', '1000000'], 'placeholder');
  window.synchronize(type, price, ['apartment', 'shack', 'palace'], ['1000', '0', '1000000'], 'min');
  window.synchronize(roomNumber, capacity, ['1', '2', '100'], ['not guest', '3', '3'], 'value');
  window.synchronize(time, timeOut, ['12', '13', '14'], ['12', '13', '14'], 'value');
})();
