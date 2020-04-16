/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var left = 0
    var right = nums.length - 1
    var mid
    while (left < right) {
        mid = left + right >> 1
        if (nums[mid] < target)
            left = mid + 1
        else
            right = mid
    }
    if (nums[left] === target)
        return left
    else
        return -1
};

var nums = []
var res = search(nums, 2)
console.log(res);