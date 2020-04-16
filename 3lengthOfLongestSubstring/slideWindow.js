/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    len = s.length
    if (len === 0)
        return 0
    var left = 0
    var lookup = new Set()
    var max_len = 0
    var cur_len = 0
    for (var i of s) {
        cur_len += 1
        while (lookup.has(i)) {//从左开始减，直到把和i一样的值从set中减掉
            lookup.delete(s[left])
            left += 1
            cur_len -= 1
        }
        if (cur_len > max_len)
            max_len = cur_len
        lookup.add(i)
    }
    return max_len
};

var s = "abcdabcbb"
var res = lengthOfLongestSubstring(s)
console.log(res);
