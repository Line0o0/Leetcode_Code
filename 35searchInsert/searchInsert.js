/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var left = 0
    var right = nums.length - 1
    var mid
    if (nums[right] < target)//特判，因为在数组里面找不到严格大于target的元素 
        return right + 1//一开始把 len 这个位置排除在外进行二分搜索，二分搜索肯定是找不到正确的值的

    //二分查找是在不断排除不需要的解
    //分析题目可知：小于target的一定不是解 
    //大于等于的可能是解 不能排除 因为实际上找的是严格大于target的第一个元素的位置
    //如果有等于target的元素 返回其中一个的下标就好
    while (left < right) {
        mid = right + left >> 1
        if (nums[mid] < target)//小于是一定不是解的 mid也就一定不是解了 所以left=mid+1 直接跳过mid
            left = mid + 1
        else
            right = mid//因为mid是有可能成为要求的解的，所以不能跳过
    }
    return left
};

var arr = [1, 3, 5, 6]
var res = searchInsert(arr, 5)
console.log(res);