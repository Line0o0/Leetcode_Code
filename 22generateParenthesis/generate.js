/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var res = []
    var str = ""
    function generate(left, right, curStr) {//值复制？
        if (left === n && right === n)
            res.push(curStr)
        // if (right > left)
        //     return
        if (left < n)
            generate(left + 1, right, curStr + "(")
        if (right < left)
            generate(left, right + 1, curStr + ")")
    }

    generate(0, 0, str)
    return res
};

console.log(generateParenthesis(2));