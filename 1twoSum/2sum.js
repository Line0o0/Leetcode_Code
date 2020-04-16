/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map()
    for (var i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i]))//先进行判断这样也不会导致重复利用同一位置
            return [map.get(target - nums[i]), i]//要保证输出的顺序
        map.set(nums[i], i)//是把指作为key
    }
};

var nums = [11, 3, 15, 4, 6, 7, 18, 1, 2, 8, 13]
var res = twoSum(nums, 26)
console.log(res);