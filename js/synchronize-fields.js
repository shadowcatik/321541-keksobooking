'use strict';

window.synchronize = (function () {
  function synchronizeFields(leftField, rightField, leftArray, rightArray, callback) {
    leftField.addEventListener('change', function () {
      var leftValue = leftArray.indexOf(leftField.value);
      callback(rightField, rightArray[leftValue]);
    });
  }
  return synchronizeFields;
})();
