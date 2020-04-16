/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    var row = grid.length
    if (row < 1)
        return null
    var col = grid[0].length
    if (col === undefined)//处理输入是一维数组的情况 直接一维数组求和
        return grid.reduce((x, y) => x + y)

    var dp = new Array(row)
    for (var i = 0; i < row; i++)
        dp[i] = new Array(col).fill(0)

    dp[0][0] = grid[0][0]
    //做第一行和第一列的处理
    for (var i = 1; i < row; i++)
        dp[i][0] = grid[i][0] + dp[i - 1][0]
    for (var i = 1; i < col; i++)
        dp[0][i] = grid[0][i] + dp[0][i - 1]
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < col; j++)
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
    return dp[row - 1][col - 1]
};

// var grid = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ]

// var grid = [[1], [2], [3]]
// var grid = [[1, 2, 3]]

var grid = [1, 2, 3]
// var sum = grid.reduce((x, y) => x + y)
// console.log(sum);
var grid = []
var res = minPathSum(grid)
console.log(res);