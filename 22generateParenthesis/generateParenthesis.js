/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var res = []
    var str = ""
    function generate(left, right, str) {//值复制？
        if (right === n && left === n) {
            res.push(str)
            return
        }

        for (let i = right; i < left; i++) {
            str += ")"//不应该更改迭代中会用到的变量
            // right++
            generate(left, i + 1, str)//不应该left++ 否则left的值是会被改变的
        }

        for (let i = left; i < n; i++) {
            str += "("
            generate(i + 1, right, str)
        }

    }

    generate(0, 0, str)
    return res
};

console.log(generateParenthesis(2));

// var str = "1"
// function test(str) {
//     str += "2"
//     console.log(str);
// }
// test(str)
// console.log(str);

// var i = 0
// var j = ++i
// console.log(j);//1