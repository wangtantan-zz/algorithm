"use strict";

//let inputStr = process.argv[2];
let inputStr = "abdefdbba";
let inputL = inputStr.length;
let subStr = [];
let maxL = 0;
let tmpL = 0;

//console.log(`char\ttmpL\tmaxL\tshift}\tsubStr`);
//for (let iL = 0; iL < inputL; iL++) {
//    let uk = checkUnique(subStr, inputStr.charAt(iL));
//    let ukk = uk;
//    tmpL = tmpL  - uk;
//    while (uk != -1) {
//        subStr.shift();
//        uk--;
//    }
//    subStr.push(inputStr.charAt(iL));
//    if (tmpL > maxL) maxL = tmpL;
//    console.log(`${inputStr.charAt(iL)}\t${tmpL}\t${maxL}\t${ukk}\t${subStr}`);
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

let charMap = {};

for (let iL = 0; iL < inputStr.length; iL++) {
    let aChar = inputStr.charAt(iL);
    if (charMap[aChar] || charMap[aChar] == 0) {
        tmpL = iL - charMap[aChar];
    }
    charMap[aChar] = iL;
    if (tmpL > maxL) maxL = tmpL;
    console.log(charMap);
}

console.log(maxL);
