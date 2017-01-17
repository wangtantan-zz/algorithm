"use strict"

console.log("------------------------ START -------------------------");

var nums1 = [1];
var nums2 = [2, 3, 4, 5, 6];
debugger
console.log(run(nums1, nums2));

function run(num1, num2) {
    var ia1 = 0,
        ia2 = nums1.length - 1,
        ib1 = 0,
        ib2 = nums2.length - 1;
        if (ia2 < 0) return (nums2[Math.floor((ib2-ib1)/2)] + nums2[Math.ceil((ib2-ib1)/2)])/2;
        if (ib2 < 0) return (nums1[Math.floor((ia2-ia1)/2)] + nums1[Math.ceil((ia2-ia1)/2)])/2;
    var ma, mb;
    var times = 0;

    //return getM(ia1, ia2, ib1, ib2);

    //function getM(ia1, ia2, ib1, ib2) {
    while (true) {
        ma = {
            min:    nums1[Math.floor((ia2-ia1)/2)+ia1],
            max:    nums1[Math.ceil((ia2-ia1)/2)+ia1]
        };
        mb = {
            min:    nums2[Math.floor((ib2-ib1)/2)+ib1],
            max:    nums2[Math.ceil((ib2-ib1)/2)+ib1]
        };

        var delta = Math.min(Math.floor((ia2-ia1)/2), Math.floor((ib2-ib1)/2));
        if (delta == 0 || ia2-ia1<=1 || ib2-ib1<=1) {
            console.log({ia1, ia2, ib1, ib2});
            if (ia2-ia1 > 2) {
                let _ia1 = ia1;
                let _ia2 = ia2;
                ia1 = Math.floor((_ia2-_ia1)/2)+_ia1-1;
                ia2 = Math.ceil((_ia2-_ia1)/2)+_ia1+1;
            } else if (ib2-ib1 > 2) {
                let _ib1 = ib1;
                let _ib2 = ib2;
                ib1 = Math.floor((_ib2-_ib1)/2)+_ib1-1;
                ib2 = Math.ceil((_ib2-_ib1)/2)+_ib1+1;
            }
            console.log({ia1, ia2, ib1, ib2});
            return fanishM(ia1, ia2, ib1, ib2);
        }

        if (ma.min <= mb.min && ma.max <= mb.max) {
            ia1 = ia1 + delta;
            ib2 = ib2 - delta;
        } else if (ma.min > mb.min && ma.max > mb.max) {
            ia2 = ia2 - delta;
            ib1 = ib1 + delta;
        } else if (ma.min <= mb.min && ma.max > mb.max) {
            var _ia1 = ia1;
            var _ia2 = ia2;
            ia1 = Math.floor((_ia2-_ia1)/2) + _ia1;
            ia2 = Math.ceil((_ia2-_ia1)/2) + _ia1;
        } else if (ma.min > mb.min && ma.max <= mb.max) {
            var _ib1 = ib1;
            var _ib2 = ib2;
            ib1 = Math.floor((_ib2-_ib1)/2) + _ib1;
            ib2 = Math.ceil((_ib2-_ib1)/2) + _ib1;
        }

    //    return getM(ia1, ia2, ib1, ib2);
    }

    function fanishM(ia1, ia2, ib1, ib2) {
        console.log("-------------------- Final Result ---------------------");
        console.log("aArray:", nums1.slice(ia1, ia2+1), "bArray:", nums2.slice(ib1, ib2+1));
        var num = ia2 - ia1 + 1 + ib2 -ib1 + 1;
        var res0, res1, res2;
        if (num/2 != parseInt(num/2)) {
            for (var i = 1; i < num/2 + 1; i++) {
                if (ia1 > ia2) {
                    res0 = nums2[ib1++];
                } else if (ib1 > ib2) {
                    res0 = nums1[ia1++];
                } else {
                    res0 = nums1[ia1] < nums2[ib1] ? nums1[ia1++] : nums2[ib1++];
                }
            }
            console.log("final    n:", {num, res0});
            return res0;
        } else {
            for (var i = 1; i <= num/2 + 1; i++) {
            console.log("index  ia1:", ia1, "  ia2:", ia2, "  ib1",  ib1, "  ib2",  ib2);
            console.log("result   0:", {num, res1, res2});
                res2 = res1;
                if (ia1 > ia2) {
                    res1 = nums2[ib1++];
                } else if (ib1 > ib2) {
                    res1 = nums1[ia1++];
                } else {
                    res1 = nums1[ia1] < nums2[ib1] ? nums1[ia1++] : nums2[ib1++];
                }
            }
            console.log("result   1:", {num, res1, res2});
            return (res1 + res2) / 2;
        }
    };
};
