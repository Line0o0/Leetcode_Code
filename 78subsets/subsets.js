/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//这道题遇到两个问题：
//1.使用ES6 ...复制数组显示temp 不是iterable。。。
//2.改用Array.from 将循环体前两句缩写到helper里面也不行。。
//3.直接在temp上push再pop（真正符合回溯意思的做法），结果全是空数组..
var subsets = function (nums) {
    var res = [],
        len = nums.length
    function helper(i, temp) {
        res.push(temp)
        for (var j = i; j < len; j++) {
            var tmp = Array.from(temp)
            tmp.push(nums[j])
            helper(j + 1, tmp)
        }
    }
    helper(0, [])
    return res
};

//迭代做法的意思是 [1，2]的子集可以从[1]的子集中copy一份，并在这一份都加入2得到
var subsetsIterable = function (nums) {
    var res = [[]]
    for (i of nums) {
        let temp = []
        for (arr of res) {
            temp.push([i].concat(arr))
        }
        res = res.concat(temp)//注意concat是返回一个新数组而不是在原数组上改
    }
    return res
};

var nums = [1, 2]
console.log(subsetsIterable(nums));
