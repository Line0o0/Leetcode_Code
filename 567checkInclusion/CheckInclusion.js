/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//滑动窗口加计数
var checkInclusion = function (s1, s2) {
    var len1 = s1.length
    var len2 = s2.length
    if (len1 > len2)
        return false
    let count = Array(26).fill(0)
    for (var i = 0; i < len1; i++) {
        count[s1[i].charCodeAt() - 97]++
        count[s2[i].charCodeAt() - 97]--
    }//此处执行完s2的开头已经放了一个s1长度的窗口了
    if (isAllZero(count))
        return true
    for (var i = len1; i < len2; i++) {
        count[s2[i].charCodeAt() - 97]--
        count[s2[i - len1].charCodeAt() - 97]++
        if (isAllZero(count))
            return true
    }
    return false
};

function isAllZero(arr) {
    return arr.every(val => val === 0)
}

var s1 = "abcba"
var s2 = "abbbabcba"
// var res = checkInclusion(s1, s2)
// console.log(res);

var m = new Map()
m.set('a', 1)
m.set('a', m.get('a') + 1)
console.log(m.get('a'));