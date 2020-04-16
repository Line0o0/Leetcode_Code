/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    len = s.length
    var temp
    for (var i = 0; i < len / 2; i++) {
        if (s[i] === s[len - i - 1])
            continue
        temp = s[i]
        s[i] = s[len - i - 1]
        s[len - i - 1] = temp
    }
    return s
};

var reverseStringRecusive = function (s) {
    len = s.length
    helper(0, len - 1, s)
    return s
};

function helper(left, right, s) {
    if (left < right) {
        var temp
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        helper(left + 1, right - 1, s)
    }
}


var arr1 = [1, 2]
var arr = ["h", "e", "l", "l", "o"]
var arr2 = ["H", "a", "n", "n", "a", "h"]
var res = reverseStringRecusive(arr1)
console.log(res);