var singleNumber = function (nums) {
    var i = 0,
        len = nums.length,
        xorRes = 0,
        res = [0, 0]
    while (i < len) {
        xorRes = nums[i] ^ xorRes
        i++
    }
    var temp = 1// 用来标志第几位是 1
    while (true) {
        if ((xorRes & 1) == 1) {
            break;
        }
        temp = temp << 1;
        xorRes = xorRes >> 1; // 右移，从低到高，找到从左到右第一位1的时候上面break条件就会成立
    }
    for (i of nums) {
        if ((i & temp) == 0)//(i & temp)注意一定要加括号
            res[0] = res[0] ^ i
        else
            res[1] = res[1] ^ i
    }
    return res
};

var nums = [1, 2, 1, 3, 2, 5]
console.log(singleNumber(nums));