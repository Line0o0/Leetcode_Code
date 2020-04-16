/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//     if (amount === 0)
//         return 0
//     if (amount < 0)
//         return -1
//     var res = coins.map(x => { return coinChange(coins, amount - x) + 1 })
//     return Math.min(...res)//必须复制res取min才有效
// }

var coinChangeRecusive = function (coins, amount) {
    if (amount === 0)
        return 0
    if (amount < 0)
        return -1
    var res = Number.MAX_VALUE
    for (i of coins) {
        var subProblem = coinChangeRecusive(coins, amount - i)
        if (subProblem == -1)//子问题存在-1的从下往上的时候就被筛掉了
            continue
        res = Math.min(res, subProblem + 1)
    }
    return res === Number.MAX_VALUE ? -1 : res
}

var coinChangeWithMemo = function (coins, amount) {
    var dict = new Map()//因为并不一定每个index都要计算，并且要判断这个index有没有，所以方便起见用了字典map
    function dp(n) {//把函数写在函数里面，可以减少函数参数的传递
        if (dict.has(n))
            return dict.get(n)
        if (n === 0)
            return 0
        if (n < 0)
            return -1
        var res = Number.MAX_VALUE
        for (i of coins) {
            var subProblem = dp(n - i)
            if (subProblem === -1)
                continue
            res = Math.min(res, subProblem + 1)
        }
        var val = res === Number.MAX_VALUE ? -1 : res
        dict.set(n, val)
        return val
    }
    return dp(amount)
}

var coinChangeWithMemoBottomUp = function (coins, amount) {
    var dp = new Array(amount + 1).fill(amount + 1)//能否这么赋值存疑
    dp[0] = 0
    for (var i = 0; i < amount + 1; i++) {
        for (coin of coins) {
            if (i - coin < 0)
                continue
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount]
}


var coins = [1, 2, 5]
var amount = 11
var res = coinChangeWithMemo(coins, amount)
console.log(res);

