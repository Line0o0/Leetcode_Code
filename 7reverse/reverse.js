/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var max = 0x7fffffff,
        min = -0x80000000,
        reverseNum = 0
    // console.log(max);
    while (x) {
        reverseNum = reverseNum * 10 + x % 10
        x = parseInt(x / 10)
    }
    return reverseNum > max || reverseNum < min ? 0 : reverseNum
};
var res = reverse(-123)
console.log(res);