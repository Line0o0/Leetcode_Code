/**
 * @param {number} n
 * @return {number}
 */
//这个问题其实是一个去掉第一项的斐波那契数列 所以重点关注下下标的对应就好了
var climbStairs = function (n) {
    var res = []
    if (n === 0)
        return 0
    res.push(1)
    res.push(1)
    for (var i = 2; i <= n; i++) {
        var next = res[i - 1] + res[i - 2]
        res.push(next)
    }
    return res[n]
};

var climbStairs = function (n) {
    if (n === 0)
        return 0
    if (n === 1)
        return 1
    var smaller = 1
    var bigger = 1
    for (var i = 2; i <= n; i++) {
        var temp = bigger
        bigger = bigger + smaller
        smaller = temp
    }
    return bigger
}

console.log(climbStairs(5));