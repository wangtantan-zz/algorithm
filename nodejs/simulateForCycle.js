/*
 *
 *
 *
 */
var arr = [];
simulateFor(0, 10, (start) => {return (start + 1);});

function simulateFor(start, end, fun) {
  console.log(arr.push(start));
  if (start >= end) {
  } else {
    simulateFor(fun(start), end, fun);
  }
  return 0;
}
