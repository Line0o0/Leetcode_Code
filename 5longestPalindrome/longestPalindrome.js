/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var len = s.length
    var dp = new Array(len)
    for (var i = 0; i < len; i++)
        dp[i] = new Array(len)
    for (var i = 0; i < len; i++)
        dp[i][i] = true
    var maxLen = 1
    var curLen
    var palStart = 0//这个是需要初始化的，免得字符串中字母全部一样，也要能返回第一个字母作为结果
    // for (var i = 0; i < len; i++) {
    //     for (var j = i; j < len; j++) {
    //上面这么写是错误的填表顺序 是有后效性的
    for (var j = 1; j < len; j++) {
        for (var i = 0; i < j; i++) {
            if (s[i] === s[j]) {
                if (j - i < 3)
                    dp[i][j] = true
                else
                    dp[i][j] = dp[i + 1][j - 1]
            }
            else
                dp[i][j] = false
            if (dp[i][j]) {
                curLen = j - i + 1
                if (maxLen < curLen) {
                    maxLen = curLen
                    palStart = i//记录下回文串的开始位置就好了
                }
            }
        }
    }
    return s.substring(palStart, palStart + maxLen)
};

var str = "cbbd"
console.log(str.substr(1));
console.log(str.substring(1));

// var res = longestPalindrome(str)
// console.log(res);

