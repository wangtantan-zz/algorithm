//https://of82sgnkm.qnssl.com/amdf-js-201610.pdf
'use strict';

const moment = require('moment');
const request = require('request');
const async = require('async');

const appid = 'dcdc435cc4aa11e587bf0242ac1101de';
const secretKey = 'InsQbm2rXG5z';

const host = 'http://hr.amiaodaifu.com:50000/1610';

let result = {};
let options = { body: { mail: "123123@qq.com", } };
getRequest(getQuestionUrl(), options, "post", (err, ret) => {
  getChildren(ret.id, ret.rootId, (err, result) => {
    console.log(result);
  });
});

function getQuestionUrl() {
  return `${host}/new-question`;
};
function getChildrenUrl(id, rootId) {
  return `${host}/questions/${id}/get-children/${rootId}`;
}
function getSubmitUrl() {
  return `${host}/questions/${id}/submit`;
}


function getRequest(url, options, method, cb) {
  options.json = true;
  console.log(method, "======", url, options);
  request[method](url, options, (err, response, body) => {
    if (err) return cb(err);
    cb(null, body);
  });
};

function get(url, id, rootId, cb) {
  console.log("get: ======", url);
  request.get(url, (err, response, body) => {
    let ret2 = str2Arr(rootId, body);
    if (ret2.length == 0) {
      //cb();
    } else {
      for (let i = 0; i < ret2.length; i++) {
        getChildren(id, ret2[i], cb);
      }
    }
  });
};

function getChildren(id, rootId, cb) {
  let url = getChildrenUrl(id, rootId);
  console.log(`>>>>>>>>>>>${rootId}`);
  get(url, id, rootId, cb);
};

function str2Arr(rootId, str) {
  let buffer = str.substr(1, str.length-2);
  //console.log(rootId, "\t\t", str, "\t\t", buffer);
  result[rootId] = buffer;
  console.log(result);
  if (buffer.length == 0) {
    return [];
  } else {
    return buffer.split(",");
  }
}
