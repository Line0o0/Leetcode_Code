/**
 * @param {number[]} T
 * @return {number[]}
 */

//递减栈
//之所以可以使用递减栈的原因是：维持这个栈可以保证一个较大元素进来时，
//比这个元素小的会被pop出去（同时计算j-i）
//比这个元素更大的还是会被留在栈里
var dailyTemperatures = function (T) {
    var len = T.length
    if (len === 0)
        return []
    var res = new Array(len).fill(0)
    var stack = []
    for (var i = 0; i < len; i++) {
        while (stack && T[stack[stack.length - 1]] < T[i]) {
            var pre = stack.pop()
            res[pre] = i - pre
        }
        stack.push(i)
    }
    return res
};

var temp = [73, 74, 75, 71, 69, 72, 76, 73]
// var nums = [1, 1, 4, 2, 1, 1, 0, 0]
var res = dailyTemperatures(temp)
console.log(res);