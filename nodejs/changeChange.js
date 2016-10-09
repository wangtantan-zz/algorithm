'use strict';
/*
 *找零钱
 */

console.log(split(100, 0, 'results:'));

function split(amount, start, result) {
  var type = [50, 20, 10, 5, 2, 1];
  if (amount < 0) return 0;
  if (amount == 0) { console.log(result); return 1};
  if (start > type.length -1) return 0;
  return split(amount, start + 1, result) + split(amount - type[start], start, result + type[start] + '|');
}

