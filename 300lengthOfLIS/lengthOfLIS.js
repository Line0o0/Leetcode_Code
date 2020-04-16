/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    var len = nums.length
    if (len === 0)//是为了避免下面的Math.max在dp是空数组的时候会返回-Inifity
        return 0
    var dp = new Array(len).fill(1)
    var maxLen
    for (var i = 1; i < len; i++) {
        maxLen = 1
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                maxLen = Math.max(maxLen, dp[j] + 1)
            }
        }
        dp[i] = maxLen
    }
    return Math.max(...dp)
};

var lengthOfLISGreedy = function (nums) {
    var tail = []
    tail.push(nums[0])
    var end = 0//记录一个end，避免每次都查询一次tail.length
    var len = nums.length
    for (var i = 1; i < len; i++) {
        if (nums[i] > tail[end]) {
            tail.push(nums[i])
            end++
        }
        else {
            var left = 0;
            var right = end
            while (left < right) {
                mid = left + right >> 1
                if (tail[mid] < nums[i])
                    left = mid + 1
                else
                    right = mid
            }
            tail[left] = nums[i]
        }
    }
    return end + 1
};

var arr = [3, 2, 1, 2, 3]
var res = lengthOfLISGreedy(arr)
console.log(res);