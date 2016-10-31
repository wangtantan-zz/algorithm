//https://of82sgnkm.qnssl.com/amdf-js-201610.pdf
'use strict';

const moment = require('moment');
const request = require('request');
const async = require('async');
const fs = require('fs');

const host = 'http://hr.amiaodaifu.com:50000/1610';

let urls = {
  getQuestionUrl: () => { return `${host}/new-question`;},
  getChildrenUrl: (id, rootId) => {
    return `${host}/questions/${id}/get-children/${rootId}`;
  },
  getCheckUrl: (id) => { return `${host}/questions/${id}/check`;},
  getSubmitUrl: (id) => { return `${host}/questions/${id}/submit`;},
};
let getOptions = { body: { mail: "i@wangtantan.com", } };

postData(urls.getQuestionUrl(), getOptions, (err, ret) => {
  getChildren(ret.id, ret.rootId, (err, object) => {
    let str = JSON.stringify(object, null, 4);
    console.log(str);
    let postOptions = { body: {root: object}};
    postData(urls.getCheckUrl(ret.id), postOptions, (err, check) => {
      console.log(check);
      readFile((err, sourceCode) => {
        let submitOptions = {
          body: {
            name: "王潭潭",
            forFun: false,
            phone: "15821788176",
            sourceCode,
          }
        };
        postData(urls.getSubmitUrl(ret.id), submitOptions, (err, msg) => {
          console.log(msg);
        });
      });
    });
  });
});

function postData(url, options, cb) {
  options.json = true;
  request.post(url, options, (err, response, body) => {
    if (err) return cb(err);
    console.log(url, "=>", body);
    cb(null, body);
  });
};

function getData(url, id, rootId, cb) {
  request.get(url, (err, response, body) => {
    let dataArr = JSON.parse(body);
    if (dataArr.length == 0) {
      cb(null, []);
    } else {
      async.mapLimit(dataArr, 1, function(rootId, _cb) {//控制并发数
        getChildren(id, rootId, _cb);
      }, cb);
    }
  });
};

function getChildren(id, rootId, cb) {
  let url = urls.getChildrenUrl(id, rootId);
  getData(url, id, rootId, (err, arr)=> {
    let obj = {id: rootId, children: arr};
    cb(null, obj);
  });
};

function readFile(cb) {
  fs.readFile(__filename, 'utf-8', (err, fs) => {
    console.log(fs);
    cb(err, fs);
  });
}
