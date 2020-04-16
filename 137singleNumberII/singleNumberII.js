var singleNumber = function (nums) {
    var a = 0,
        b = 0,
        len = nums.length
    for (var i = 0; i < len; i++) {
        b = (b ^ nums[i]) & ~a
        a = (a ^ nums[i]) & ~b
    }
    return b
};