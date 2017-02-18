'use strict';

window.synchronizeFields = function (leftField, rightField, leftArray, rightArray, valueField) {
  leftField.addEventListener('change', function () {
    var leftValue = leftArray.indexOf(leftField.value);
    var rightValue = rightArray[leftValue];
    rightField[valueField] = rightValue;
  });

  rightField.addEventListener('change', function () {
    var rightValue = rightArray.indexOf(rightField[valueField]);
    var leftValue = leftArray[rightValue];
    leftField.value = leftValue;
  });
};
