"use strict"

console.log("------------------------ START -------------------------");

//var nums1 = [1, 4, 6, 11];
//var nums2 = [2, 3, 4, 5, 6];
//var nums1 = [1, 3, 5, 6, 6, 6, 6, 6, 8, 11, 88, 99, 101, 102, 103];
//var nums2 = [1, 6, 7, 12, 89, 100, 991, 2000, 3000];
var nums1 = [1, 2];
var nums2 = [3, 4];
console.log(run(nums1, nums2));

function run(nums1, nums2) {
    if (nums1.length < nums2.length) {
        var tmp = nums2;
        nums2 = nums1;
        nums1 = tmp;
    }
    if (nums2.length == 0) return (nums1[Math.floor((nums1.length-1)/2)] + nums1[Math.ceil((nums1.length-1)/2)])/2;
    if (nums2.length == 1) {
        if (nums1.length == 1) return (nums1[0] + nums2[0]) / 2;
        var element = {
            min:    nums1[Math.floor((nums1.length-2)/2)],
            middle: nums1[(nums1.length-1)/2],
            max:    nums1[Math.ceil((nums1.length)/2)],
        };
        console.log({element});
        if (nums2[0] >= element.max) return element.middle ? (element.middle + element.max)/2 : element.max;
        if (nums2[0] <= element.min) return element.middle ? (element.middle + element.min)/2 : element.min;
        return element.middle ? (element.middle + nums2[0]) / 2 : nums2[0];
    }
    var m = nums1.length;
    var n = nums2.length;
    var index = 0,
        _index = n - 1,
        _indextmp = parseInt((m + n)/2 - 1 - index),
        indextmp = parseInt((m + n)/2 - 1 - _index);
    var em;
    var en;
    if (nums1[m - 1] <= nums2[0]) return getM(nums1, nums2);
    if (nums2[n - 1] <= nums1[0]) return getM(nums2, nums1);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
    while (true) {
        em = {min: nums1[parseInt((indextmp + _indextmp)/2)], max: nums1[parseInt((indextmp + _indextmp)/2) + 1]};
        en = {min: nums2[parseInt((index + _index)/2)], max: nums2[parseInt((index + _index)/2) + 1]};

        console.log({ em, mi: {indextmp, _indextmp, mN: parseInt((indextmp + _indextmp)/2)}, en, ni: {index, _index, nN: parseInt((index + _index)/2)} });
        if (em.max >= en.min && en.max >= em.min) {
            if ((m + n) % 2 == 0) {
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                console.log({em, en, left: Math.max(em.min, en.min), right: Math.min(em.max, en.max)});
                return (Math.max(em.min, en.min) + Math.min(em.max, en.max)) / 2;
            } else {
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                return Math.min(em.max, en.max);
            }
        }

        if (em.max >= en.max) {
           _indextmp = parseInt((indextmp + _indextmp)/2);
           index  = parseInt((index + _index)/2);
        } else {
           indextmp = parseInt((indextmp + _indextmp)/2);
           _index  = parseInt((index + _index)/2);
        }
    };
    function getM(arr1, arr2) {
        let l1 = arr1.length,
            l2 = arr2.length;
        if (l1 == l2) return (arr1[l1-1] + arr2[0]) / 2;
        if (l1 > l2) return (arr1[Math.floor((l1 + l2 - 1) / 2)] + arr1[Math.ceil((l1 + l2 - 1) / 2)]) / 2;
        return (arr2[Math.floor((l2 - l1 - 1) / 2)] + arr2[Math.ceil((l2 - l1 - 1) / 2)]) / 2;
    }
};
