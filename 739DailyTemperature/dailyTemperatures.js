/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    var len = T.length
    if (len === 0)
        return []
    var res = new Array(len).fill(0)
    for (var i = len - 2; i >= 0; i--) {
        for (var j = i + 1; j < len; j += res[j]) {//跨台阶 不断地找更高的 而跳过中间那些低的
            if (T[j] > T[i]) {
                res[i] = j - i
                break
            }
            if (res[j] === 0)//没有更高的了 为了避免死循环
                break
        }
    }
    return res
};

var temp = [73, 74, 75, 71, 69, 72, 76, 73]
// var nums = [1, 1, 4, 2, 1, 1, 0, 0]
var res = dailyTemperatures(temp)
console.log(res);