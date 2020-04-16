/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    var len1 = word1.length
    var len2 = word2.length
    var dp = new Array(len1 + 1)
    for (var i = 0; i < len1 + 1; i++)
        dp[i] = new Array(len2 + 1).fill(0)
    // dp[0][0] = 0
    for (var i = 1; i < len1 + 1; i++)
        dp[i][0] = dp[i - 1][0] + 1
    for (var j = 1; j < len2 + 1; j++)
        dp[0][j] = dp[0][j - 1] + 1
    for (var i = 1; i < len1 + 1; i++) {
        for (var j = 1; j < len2 + 1; j++) {
            if (word1[i - 1] === word2[j - 1])//注意DP表是多了一行一列的 所以这里i、j都要-1
                dp[i][j] = dp[i - 1][j - 1]
            else
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
        }
    }
    return dp[len1][len2]
};

var res = minDistance('horse', 'ros')
console.log(res);