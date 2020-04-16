/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    var res = []
    var len = nums.length,
        minDiff = Number.MAX_VALUE,
        curSum
    for (var i = 0; i < len - 2;) {//这里不要写i++了，留给后面排除相同数字的时候顺便做了
        var head = i + 1,
            tail = len - 1
        while (head < tail) {
            curSum = nums[i] + nums[head] + nums[tail] - target
            curDiff = Math.abs(curSum)
            if (curDiff < minDiff) {
                minDiff = curDiff
                res = curSum + target
                // res.push([curSum, nums[i], nums[head], nums[tail]])
                if (curDiff === 0)//因为只存在唯一答案
                    return target
            }
            if (curSum < 0)
                // while (nums[head] === nums[++head]) { }//自增是一定会进行的 如果相邻值相同，就继续自增，跳过，避免重复数字
                ++head
            else if (curSum > 0)
                // while (nums[tail] === nums[--tail]) { }//放弃用while对重复值的检查可以大幅减少时间复杂度
                --tail
            // else //放在这里时间复杂度反而变高
            //     return target
        }
        while (nums[i] === nums[++i]) { }//这里做i的自增和跳过相同数字
    }
    return res
    // return res.pop()[0] + target
};

var nums = [-1, 2, 1, -4]
var res = threeSumClosest(nums, 1)
console.log(res);