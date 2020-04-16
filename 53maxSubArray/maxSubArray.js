/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let len = nums.length
    if (len === 0)
        return null
    let dp = new Array(len)
    dp[0] = nums[0]
    for (let i = 1; i < len; i++) {
        let pre = dp[i - 1] > 0 ? dp[i - 1] : 0
        dp[i] = nums[i] + pre
    }
    return Math.max(...dp)
};

let nums = [-1, -2, -1, -3]
let res = maxSubArray(nums)
console.log(res);