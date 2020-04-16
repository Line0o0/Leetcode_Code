/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var nums = [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]
    var len = digits.length,
        res = []
    if (len === 0)
        return []
    function helper(index, temp) {
        if (index === len)
            res.push(temp)

        var arr = nums[digits[index]]
        for (var i in arr) {
            helper(index + 1, temp + arr[i])
        }

    }
    helper(0, "")
    return res
};

var str = ""
var res = letterCombinations(str)
console.log(res);
