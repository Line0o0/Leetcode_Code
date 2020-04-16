/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    //n为行 m为列
    //建一个m+1*n的dp表 并把第一行都赋值为1 避免讨论左边的边界和上面的边界
    if (m < 1 || n < 1)
        return 0
    var dp = new Array(n)
    dp[0] = new Array(m + 1).fill(1)
    for (var i = 1; i < n; i++)
        dp[i] = new Array(m + 1).fill(0)
    // dp[1][1] = 1 这个不改也无所谓
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m + 1; j++)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
    return dp[n - 1][m]
};

var res = uniquePaths(1, 3)
console.log(res);