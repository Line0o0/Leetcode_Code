/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var res = [],
        len = candidates.length
    if (len === 0)
        return res

    function helper(i, sum, temp) {
        if (sum > target)
            return
        else if (sum === target) {
            res.push(temp)
            return
        }
        for (var j = i; j < len; j++) {
            var arr = Array.from(temp)
            arr.push(candidates[j])
            helper(j, sum + candidates[j], arr)
        }
    }
    helper(0, 0, [])
    return res
};

var candidates = [],
    target = 7
var res = combinationSum(candidates, target)
console.log(res);