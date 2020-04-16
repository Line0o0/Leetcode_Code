/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var res = [],
        len = nums.length

    function helper(index) {
        if (index === nums.length - 1) {
            res.push([...nums])
        }
        for (var i = index; i < len; i++) {//i不能从index+1开始 不然会丢失当前状态的全排列
            swap(index, i)
            helper(index + 1)//i从index+1开始，当前状态这一步往后的排列情况都会丢失
            swap(index, i)
        }
    }

    function swap(i, j) {
        var temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    helper(0)
    return res
};



var nums = [1, 2, 3, 4]
console.log(permute(nums));