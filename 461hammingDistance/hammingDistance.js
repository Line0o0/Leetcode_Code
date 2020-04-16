/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let z = x ^ y,
        cnt = 0
    // console.log(z);
    while (z) {
        // if (z & 1 === 1)//只有两个操作数相应的比特位都是1时，才为1 这里只比最后一位
        //     cnt++
        cnt += z & 1//这样写会更快一点
        z = z >> 1
    }
    return cnt
};

var res = hammingDistance(1, 4)
console.log(res);