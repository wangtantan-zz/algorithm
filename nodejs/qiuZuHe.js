'use strict';
/*给定n、m两个参数
 *求[1, ....., n] 中所有和为m的组合
 */
var type = [];
run(10, 15);

function run(n, m) {
  for (var i = 1; i <= n; i++) {
    type.push(i);
  }
  console.log(split(m, 0, 'results:'));
}

function split(amount, start, result) {
  if (amount < 0) return 0;
  if (amount == 0) { console.log(result); return 1};
  if (start > type.length -1) return 0;
  return split(amount, start + 1, result) + split(amount - type[start], start + 1, result + type[start] + '|');
}

