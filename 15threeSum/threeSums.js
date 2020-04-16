
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    var res = []
    if (nums[0] > 0 || nums[nums.length - 1] < 0)//整个数组同号，就不可能了
        return res
    var len = nums.length
    for (var i = 0; i < len - 2;) {//这里不要写i++了，留给后面排除相同数字的时候顺便做了
        if (nums[i] > 0)
            break
        var head = i + 1,
            tail = len - 1
        var curSum
        while (head < tail) {
            if (nums[i] * nums[tail] > 0)//三者同号 不可能了
                break
            curSum = nums[i] + nums[head] + nums[tail]
            if (curSum === 0) {
                res.push([nums[i], nums[head], nums[tail]])
                while (nums[head] === nums[++head]) { }
                while (nums[tail] === nums[--tail]) { }
            }
            else if (curSum < 0)
                while (nums[head] === nums[++head]) { }//自增是一定会进行的 如果相邻值相同，就继续自增，跳过，避免重复数字
            else if (curSum > 0)
                while (nums[tail] === nums[--tail]) { }

            // if (nums[i] + nums[head] > 0)//前两位加起来大于0了，不可能了
            //     break
        }
        while (nums[i] === nums[++i]) { }//这里做i的自增和跳过相同数字
    }
    return res
};

var arr = [0, 0, 0, 0]
var res = threeSum(arr)
console.log(res);