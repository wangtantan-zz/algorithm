"use strict";

//let s = process.argv[2];
var s = "ausfdask";
//var inputL = s.length;
//var subStr = [];
//var maxL = 0;
//var tmpL = 0;

//console.log(`char\ttmpL\tmaxL\tshift}\tsubStr`);
//for (let iL = 0; iL < inputL; iL++) {
//    let uk = checkUnique(subStr, s.charAt(iL));
//    let ukk = uk;
//    tmpL = tmpL  - uk;
//    while (uk != -1) {
//        subStr.shift();
//        uk--;
//    }
//    subStr.push(s.charAt(iL));
//    if (tmpL > maxL) maxL = tmpL;
//    console.log(`${s.charAt(iL)}\t${tmpL}\t${maxL}\t${ukk}\t${subStr}`);
//}
//
//console.log("Max:\t" + maxL);
//
//function checkUnique(charArr, aChar) {
//    for (let i = 0; i < charArr.length; i++) {
//        if (charArr[i] === aChar) {
//            return i;
//        }
//    }
//    return -1;
//}
var s = "oausfdask";
var charMap = {};
var i = 0;
var ie = 0;
var aChar;
var tmp = 0;
var l = s.length; 
//if (l === 0) return 0;
var maxL = 0;

for (var iL = 0; iL < l; iL++) {
    aChar = s[iL];
    ie = charMap[aChar];
    ie && ie > i ? i = ie : null;
    tmp = iL -i + 1;
    maxL = Math.max(tmp, maxL);
    charMap[aChar] = iL;
    console.log({i, ie, iL, tmp, maxL, map: charMap});
}

//return maxL;
console.log(maxL);
