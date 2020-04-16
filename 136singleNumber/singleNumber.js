/**
 * @param {number[]} nums
 * @return {number}
 */
//只有一个唯一，其他都是成对：异或
var singleNumber = function (nums) {
    var i = 0,
        len = nums.length,
        res = 0
    while (i < len) {
        res = nums[i] ^ res
        i++
    }
    return res
};

var nums = [4]
console.log(singleNumber(nums)); 