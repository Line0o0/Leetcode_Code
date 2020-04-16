/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let start = 0,
        end = nums.length - 1
    while (nums[start] <= nums[start + 1])
        start++
    while (nums[end] >= nums[end - 1])
        end--
    if (end <= start)
        return 0
    let tmp = nums.slice(start, end + 1).sort((x, y) => x - y),
        minSub = tmp[0],
        maxSub = tmp[tmp.length - 1]
    for (let i = start - 1; i >= 0; i--) {
        if (minSub >= nums[i])
            break
        start--
    }
    for (let i = end + 1; i < nums.length; i++) {
        if (maxSub <= nums[i])
            break
        end++
    }
    // console.log(start, end);
    return end - start + 1
};

// var nums = [2, 5, 6, 4, 8, 13, 9, 12, 15]
// var nums = [1]
var nums = [1, 3, 3, 2, 4]
var res = findUnsortedSubarray(nums)
console.log(res);