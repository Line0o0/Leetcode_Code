/**
* @param {number[]} height
* @return {number}
*/
//问题的本质在于 每次移动的都是短板 因为要的是过程最大值
//省去多余判断，每种状态都取max，保证不会丢失最大值就好
//我的代码虽然复杂很多，但做了更多的剪枝计算，所以时间复杂度表现会好一点，但是空间复杂度就会较差
var maxArea = function (height) {
    var i = 0,
        j = height.length - 1,
        res = 0;
    while (i < j) {
        res = height[i] < height[j] ?
            Math.max(res, (j - i) * height[i++]) :
            Math.max(res, (j - i) * height[j--]);
    }
    return res;
};

var heights = [2, 3, 10, 5, 7, 8, 9]
var heights2 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var heights3 = [2, 3, 4, 5, 18, 17, 6]
var res = maxArea(heights3)
console.log(res);