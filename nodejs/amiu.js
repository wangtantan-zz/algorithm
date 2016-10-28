//https://of82sgnkm.qnssl.com/amdf-js-201610.pdf
'use strict';

const moment = require('moment');
const request = require('request');

const appid = 'dcdc435cc4aa11e587bf0242ac1101de';
const secretKey = 'InsQbm2rXG5z';

const host = 'http://hr.amiaodaifu.com:50000/1610';

function getQuestionUrl() {
  return `${host}/new-question`;
};
function getChildrenUrl(id, rootId) {
  return `${host}/questions/${id}/get-children/${rootId}`;
}
function getSubmitUrl() {
  return `${host}/questions/${id}/submit`;
}

let options = {
  body: {
    mail: "123123@qq.com",
  }
};

console.log('===========', options);
getRequest(getQuestionUrl(), options, "post", console.log);

function getRequest(url, options, method, cb) {
  options.json = true;
  console.log("------------", url, options, method);
  request[method](url, options, (err, response, body) => {
    if (err) return cb(err);
    cb(null, body);
  });
};
