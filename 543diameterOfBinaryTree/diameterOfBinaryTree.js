
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

//找某个节点 它的左右子树深度和最大的
var diameterOfBinaryTree = function (root) {
    if (root === null)
        return null
    var maxdepthSum = 0
    function findDepth(node) {
        if (node === null)
            return 0
        var leftDepth = findDepth(node.left)
        var rightDepth = findDepth(node.right)
        maxdepthSum = Math.max(leftDepth + rightDepth, maxdepthSum)
        return Math.max(leftDepth, rightDepth) + 1
    }
    findDepth(root)
    return maxdepthSum
};

var node1 = new TreeNode(1)
var node2 = new TreeNode(1)
var node3 = new TreeNode(1)
var node4 = new TreeNode(1)
var node5 = new TreeNode(1)
var node6 = new TreeNode(1)
var node7 = new TreeNode(1)
var node8 = new TreeNode(1)
var node9 = new TreeNode(1)
var node10 = new TreeNode(1)
// node1.left = node2
node1.right = node3

node2.left = node4
node2.right = node5

node4.right = node6
node6.left = node7

node5.left = node8
node8.right = node9
var res = diameterOfBinaryTree(node1)
console.log(res);
