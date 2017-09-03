"use strict";

let mapHour = {};
let mapMinute = {};
for (let i = 0; i < 60; i++) {
    let num = [];
    let count = 0;
    let m = i;
    while (m != 0) {
        m &= (m - 1);
        count++;
    }
    count < 4 && i < 12
        ? (mapHour[count] ? mapHour[count].push(i) : mapHour[count] = [i])
        : null;
    mapMinute[count] ? mapMinute[count].push(i < 10 ? "0" + i: "" + i) : mapMinute[count] = [i < 10 ? "0" + i: "" + i];
    console.log(i + " has " + count + " One");
};

console.log("mapHour: ", mapHour);
console.log("mapMinute: ", mapMinute);


