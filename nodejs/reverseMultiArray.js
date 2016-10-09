/*
 *递归的方式转换多层数组
 *[20, 19, [12, 11], [10, [9, 0]]]
 *reverse to
 *[20, 19, 12, 11, 10, 9, 0]
 */
console.log(run([20, 19, [12, [], 11], [10, [9, 0]]]));

function run(post) {
  return append(post, []);
}

function append(m, arr) {
  console.log(m, arr);
  if ((typeof m) == 'number') {
    arr.push(m);
  } else {
    for (var i = 0; i < m.length; ++i) {
      append(m[i], arr);
    }
  }
  return arr;
}
