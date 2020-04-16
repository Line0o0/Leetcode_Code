/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChangeRecusive = function (coins, amount) {
    if (amount === 0)
        return 0
    if (amount < 0)
        return -1
    var minCnt = Number.MAX_VALUE
    var subproblem
    for (i of coins) {
        subproblem = coinChangeRecusive(coins, amount - i)
        if (subproblem == -1)//注意JS写等号是不会报错的！
            continue
        minCnt = Math.min(minCnt, subproblem + 1)
    }
    return minCnt === Number.MAX_VALUE ? -1 : minCnt
}

var coinChangeWithMemo = function (coins, amount) {
    var memo = {}
    function dp(amount) {
        if (amount === 0)
            return 0
        if (amount < 0)
            return -1
        if (memo[amount])
            return memo[amount]
        var minCnt = Number.MAX_VALUE,
            subproblem
        for (var i of coins) {
            subproblem = dp(amount - i)
            if (subproblem === -1)
                continue
            minCnt = Math.min(minCnt, subproblem + 1)
        }
        minCnt = minCnt === Number.MAX_VALUE ? -1 : minCnt
        memo[amount] = minCnt
        return minCnt
    }
    return dp(amount)
}



var coins = [2]
var amount = 3
var res = coinChangeWithMemo(coins, amount)
console.log(res);

// var memo = {}
// memo[3] = 2
// // console.log(memo);
// if (memo[3] !== undefined)
//     console.log(memo[3]);