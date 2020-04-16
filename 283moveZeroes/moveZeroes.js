/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//测试中我自己写的这种反倒还要更快 难道splice不是复杂度O(n)?
var moveZeroes1 = function (nums) {
    let cnt = 0
    for (let i = 0; i < nums.length - cnt; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            cnt++
            i--
        }
    }
    return nums
};

var moveZeroes = function (nums) {
    var len = nums.length
    var lastNotZeroAt = 0
    for (var cur = 0; cur < len; cur++) {
        if (nums[cur] != 0) {
            var temp = nums[lastNotZeroAt]
            nums[lastNotZeroAt] = nums[cur]
            nums[cur] = temp
            lastNotZeroAt++
        }
    }
    return nums
};

let nums = [0, 0, 0, 2, 0, 3, 0]
let res = moveZeroes(nums)
console.log(res);