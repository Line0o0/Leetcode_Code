
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function (root) {
//     var queue = []
//     var res = []
//     var node = null
//     queue.push(root)
//     while (queue.length !== 0) {
//         node = queue.shift()
//         res.push(node.val)
//         if (node.left !== null)
//             queue.push(node.left)
//         if (node.right !== null)
//             queue.push(node.right)
//     }
//     return res
// };


//上面纯用队列还没办法分层，只能用递归来实现分层了
var levelOrder = function (root) {
    var queue = []
    var res = []
    if (root === null)
        return res
    queue.push(root)

    var perLevel = function (levelQueue) {
        var nextLevelQueue = []
        var node = null
        var levelRes = []
        while (levelQueue.length !== 0) {
            node = levelQueue.shift()
            levelRes.push(node.val)
            if (node.left !== null)
                nextLevelQueue.push(node.left)
            if (node.right !== null)
                nextLevelQueue.push(node.right)
        }
        res.push(levelRes)
        if (nextLevelQueue.length !== 0)
            perLevel(nextLevelQueue)
        return
    }

    perLevel(queue)
    return res
};

//这是114题改成用层序遍历
var flatten = function (root) {
    var queue = []
    var node = root
    while (queue.length !== 0 || node !== null) {
        if (node.left !== null)
            queue.push(node.left)
        if (node.right !== null)
            queue.push(node.right)
        node.left = null//要到这里才把left改为null，不然节点会丢失
        if (queue.length == 0)//要经过上面两个if语句发现queue加不进内容了，才break
            break
        node.right = queue.shift()
        node = node.right
    }
    return root
};



var node1 = new TreeNode(3)
var node2 = new TreeNode(9)
var node3 = new TreeNode(20)
var node4 = new TreeNode(15)
var node5 = new TreeNode(7)
node1.left = node2
node1.right = node3
// node3.left = node4
// node3.right = node5

var res = levelOrder(node1)
console.log(res);