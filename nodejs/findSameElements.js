'use strict';

const _ = require('lodash');
const csv = require('csv');
const async = require('async');
const fs = require('fs');

mySeries({
  data1: (_cb) => {
    fs.readFile(`data/uid1.txt`, 'utf-8', _cb);
  },
  data2: (_cb) => {
    fs.readFile(`data/uid2.txt`, 'utf-8', _cb);
  },
  arr1: (_cb, ret) => {
    csv.parse(ret.data1, _cb);
  },
  arr2: (_cb, ret) => {
    csv.parse(ret.data2, _cb);
  },
}, (err, ret) => {
  if (err) {
    console.log('err');
  } else {
    let arr = getSameElements(ret.arr1, ret.arr2);
    console.log(arr);
  }
});

function mySeries(tasks, callback) {
  let prev;
  for (let i in tasks) {
    let task = tasks[i];
    if (prev) {
      tasks[i] = [prev, task];
    } else {
      tasks[i] = task;
    }
    prev = i;
  }
  async.auto(tasks, callback);
};

function getSameElements(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i][0] == arr2[j][0]) {
        arr.push(arr1[i][0]);
        break;
      }
    }
  }
  console.log(`same element: ${arr.length}`);
  return arr;
}
