/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var prefix = strs[0],
        len = strs.length
    if (len === 0) return ""
    for (let i = 1; i < len; i++) {
        var end = Math.min(prefix.length - 1, strs[i].length - 1)
        for (var j = 0; j <= end; j++) {
            if (prefix[j] !== strs[i][j])
                break
        }
        if (j === 0)
            return ""
        prefix = prefix.slice(0, j)
    }
    return prefix
};

var strs = ["dog", "racecar", "car"]
var res = longestCommonPrefix(strs)
console.log(res);