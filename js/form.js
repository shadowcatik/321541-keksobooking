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

  var syncValues = function (element, value) {
    element.value = value;
  };

  var syncValueMin = function (element, value) {
    element.min = value;
  };

  window.synchronize(type, price, ['apartment', 'shack', 'palace'], ['1000', '0', '1000000'], syncValues);
  window.synchronize(type, price, ['apartment', 'shack', 'palace'], ['1000', '0', '1000000'], syncValues);

  window.synchronize(type, price, ['apartment', 'shack', 'palace'], ['1000', '0', '1000000'], syncValueMin);
  window.synchronize(type, price, ['apartment', 'shack', 'palace'], ['1000', '0', '1000000'], syncValueMin);

  window.synchronize(roomNumber, capacity, ['1', '2', '100'], ['not guest', '3', '3'], syncValues);
  window.synchronize(roomNumber, capacity, ['1', '2', '100'], ['not guest', '3', '3'], syncValues);

  window.synchronize(time, timeOut, ['12', '13', '14'], ['12', '13', '14'], syncValues);
  window.synchronize(time, timeOut, ['12', '13', '14'], ['12', '13', '14'], syncValues);

})();
