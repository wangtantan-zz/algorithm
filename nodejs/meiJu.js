'use strict';
/*
 *递归枚举
 */
//console.log('00'.substring(0, 1));
var string = '0012'
//print(string);
test(3);

function test(n) {
  var arr = [];
  for (var i = 9; i >= 0; i--) {
    arr.push(i + '');
  }
  permute('', arr, n);
}

function permute(profix, arr, n) {
  if (n == 0) {
    print(profix);
  } else {
    for (var i = 0; i < 10; i++) {
      permute(profix + arr[i], arr, n-1);
    }
    n--;
  }
}

function print(str) {
  if (str.length == 1) {
    console.log(str);
  } else if (str.substring(0,1) === '0') {
    print(str.substring(1));
  } else {
    console.log(str);
  }
}
