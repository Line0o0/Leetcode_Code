/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var len = nums.length
    if (len === 0)
        return 0
    var dp = new Array(len)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (var i = 2; i < len; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    return dp[len - 1]
}
var nums = [2, 7, 9, 3, 1]
var res = rob(nums)
console.log(res);