// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//问题的本质是反序中序遍历 能够保证在BST中降序访问所有节点
//把访问过的节点的值都求和 加到这一个节点
var convertBST = function (root) {
    var sum = 0
    function reverseInOrder(root) {
        if (root !== null) {
            reverseInOrder(root.right)
            sum += root.val
            root.val = sum
            reverseInOrder(root.left)
        }
    }

    reverseInOrder(root)
    return root
};


var node1 = new TreeNode(5)
var node2 = new TreeNode(2)
var node3 = new TreeNode(13)
var node4 = new TreeNode(1)
var node5 = new TreeNode(3)
var node6 = new TreeNode(12)
var node7 = new TreeNode(14)
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

var sumTree = convertBST(node1)
console.log(sumTree);
