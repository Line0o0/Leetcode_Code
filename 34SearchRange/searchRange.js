/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var right = nums.length - 1,
        left = 0,
        mid = 0,//默认只有一个元素时，left=right，合理此时mid应该为0
        start,
        end
    while (left < right) {
        mid = left + right >> 1
        if (nums[mid] < target)
            left = mid + 1
        else if (nums[mid] > target)
            right = mid
        else
            break
    }
    if (nums[mid] !== target)
        return [-1, -1]
    start = end = mid
    while (start >= left && nums[start - 1] === target)
        start--
    while (end < right && nums[end + 1] === target)
        end++
    return [start, end]
};

var nums = [1, 4], target = 4
var res = searchRange(nums, target)
console.log(res);