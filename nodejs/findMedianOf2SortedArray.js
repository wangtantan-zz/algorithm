"use strict"

console.log();
console.log();
console.log();
console.log();
console.log("------------------------ START -------------------------");

let a = [1, 3, 5, 6, 6, 6, 6, 6, 8, 11, 88, 99, 101, 102, 103];
let b = [1, 6, 7, 12, 89, 100, 991, 2000, 3000];

let ia1 = 0,
    ia2 = a.length - 1,
    ib1 = 0,
    ib2 = b.length - 1;
let ma, mb;
let times = 0;

console.log("aArray:", a.slice(ia1, ia2+1), "bArray:", b.slice(ib1, ib2+1));
console.log("index  ia1:", ia1, "  ia2:", ia2, "  ib1",  ib1, "  ib2",  ib2);
console.log(getM(ia1, ia2, ib1, ib2));

function getM(ia1, ia2, ib1, ib2) {
    if (times++ > 10) process.exit(0);
    console.log("==================>>> ", times);

    ma = {
        min:    a[Math.floor((ia2-ia1-1)/2)+ia1],
        middle: a[(ia2-ia1)/2+ia1],
        max:    a[Math.ceil((ia2-ia1+1)/2)+ia1]
    };
    mb = {
        min:    b[Math.floor((ib2-ib1-1)/2)+ib1],
        middle: b[(ib2-ib1)/2+ib1],
        max:    b[Math.ceil((ib2-ib1+1)/2)+ib1]
    };

    console.log(ma);
    console.log(mb);
    if (ia2-ia1<=2 || ib2-ib1<=2) {
        console.log("-------------------- Almost Fanish ---------------------");
        console.log(ma);
        console.log(mb);
        console.log("last:  ia1:", ia1, "  ia2:", ia2, "  ib1",  ib1, "  ib2",  ib2);
        console.log("last:  va1:", a[ia1], "  va2:", a[ia2], "  iv1",  b[ib1], "  vb2",  b[ib2]);
        if (ia2-ia1 > 4) {
            ia1 = Math.floor((ia2-ia1-1)/2)+ia1-1;
            ia2 = Math.ceil((ia2-ia1+1)/2)+ia1+1;
        } else if (ib2-ib1 > 4) {
            ib1 = Math.floor((ib2-ib1-1)/2)+ib1-1;
            ib2 = Math.ceil((ib2-ib1+1)/2)+ib1+1;
        }
        return fanishM(ia1, ia2, ib1, ib2);
    }

    console.log("get min:", Math.floor((ia2-ia1-1)/2), ia1, Math.floor((ib2-ib1-1)/2), ib1);
    let delta = Math.min(Math.floor((ia2-ia1-1)/2), Math.floor((ib2-ib1-1)/2));
    console.log({delta});
    //console.log(ma.min, "----", mb.min, "----", ma.max, "----", mb.max);

    if (ma.min <= mb.min && ma.max <= mb.max) {
        console.log("1:+++++++");
        ia1 = ia1 + delta;
        ib2 = ib2 - delta;
    } else if (ma.min > mb.min && ma.max > mb.max) {
        console.log("2:+++++++");
        ia2 = ia2 - delta;
        ib1 = ib1 + delta;
    } else if (ma.min <= mb.min && ma.max > mb.max) {
        console.log("3:+++++++");
        let _ia1 = ia1;
        let _ia2 = ia2;
        ia1 = Math.floor((_ia2-_ia1-1)/2) + _ia1;
        ia2 = Math.ceil((_ia2-_ia1+1)/2) + _ia1;
    } else if (ma.min > mb.min && ma.max <= mb.max) {
        console.log("4:+++++++");
        let _ib1 = ib1;
        let _ib2 = ib2;
        ib1 = Math.floor((_ib2-_ib1-1)/2) + _ib1;
        ib2 = Math.ceil((_ib2-_ib1+1)/2) + _ib1;
    }

    console.log("index  ia1:", ia1, "  ia2:", ia2, "  ib1",  ib1, "  ib2",  ib2);
    console.log("aArray:", a.slice(ia1, ia2+1), "bArray:", b.slice(ib1, ib2+1));
    console.log("");
    return getM(ia1, ia2, ib1, ib2);
}

function fanishM(ia1, ia2, ib1, ib2) {
    console.log("-------------------- Final Result ---------------------");
    console.log("aArray:", a.slice(ia1, ia2+1), "bArray:", b.slice(ib1, ib2+1));
    let num = ia2 - ia1 + 1 + ib2 -ib1 + 1;
    let res0, res1, res2;
    if (num/2 != parseInt(num/2)) {
        for (let i = 0; i < num/2; i++) {
            res0 = a[ia1] < b[ib1] ? a[ia1++] : b[ib1++];
        }
        return res0;
    } else {
        for (let i = 0; i < num/2; i++) {
            res2 = res1;
            res1 = a[ia1] < b[ib1] ? a[ia1++] : b[ib1++];
        }
        return (res1 + res2) / 2;
    }
};
