
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
var maxDepth = function (root) {
    if (root == null)
        return null
    var max = 0
    var curDepth = 0
    function preOrder(node, depth) {
        if (node === null) {
            if (depth > max)
                max = depth - 1
            return
        }
        preOrder(node.left, depth + 1)
        preOrder(node.right, depth + 1)
        return
    }
    preOrder(root, curDepth + 1)
    return max
};

var node1 = new TreeNode(3)
var node2 = new TreeNode(9)
var node3 = new TreeNode(20)
var node4 = new TreeNode(15)
var node5 = new TreeNode(7)
node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5
console.log(maxDepth(node1));

