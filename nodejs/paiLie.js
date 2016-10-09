'use strict';
/*
 *排列的递归枚举
 */
test('123456');
console.log('1234567'.substr(1, 2));
console.log('1234567'.substring(1, 2));

function test(str) {
  permute('', str);
}

function permute(profix, str) {
  if (str.length == 0) {
    console.log(profix);
  } else {
    for (var i = 0; i < str.length; i++) {
      permute(
        profix + str[i],
        str.substring(0, i) + str.substring(i + 1, str.length)
      );
    }
  }
}
