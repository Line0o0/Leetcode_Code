/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (height.length < 2)
        return 0
    var left = 0,
        right = height.length - 1,
        max = calcArea(left, right),
        area = max,
        shortest
    while (left < right) {
        if (height[left] < height[right]) {
            shortest = height[left]
            while (area <= max && right > left) {//必须要找到比现有短板更高的值
                left++
                if (height[left] > shortest) {
                    area = calcArea(left, right)
                    break
                }
            }
            max = Math.max(area, max)
        }
        else {
            shortest = height[right]
            while (area <= max && right > left) {
                right--
                if (height[right] > shortest) {
                    area = calcArea(left, right)
                    break
                }
            }
            max = Math.max(area, max)
        }
    }

    function calcArea(left, right) {
        var minHeight = Math.min(height[left], height[right])
        var area = (right - left) * minHeight
        return area
    }

    return max
};



var heights = [2, 3, 10, 5, 7, 8, 9]
var heights2 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var heights3 = [2, 3, 4, 5, 18, 17, 6]
var res = maxArea(heights2)
console.log(res);