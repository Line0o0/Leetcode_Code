
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

//虽然能够AC，但是时间和空间效率都很差
var flatten = function (root) {
    preOrder(root)
};

function preOrder(node) {
    if (node === null)
        return null
    var cur = node
    var left = preOrder(node.left)
    var right = preOrder(node.right)
    node.left = null//把左边置为null
    node.right = left
    while (cur.right !== null) {//需要像链表一样找到左边的末尾，再把右边接上去
        cur = cur.right
    }
    cur.right = right
    return node
}

//迭代做法
// 1.将左子树插入到右子树的地方
// 2.将原来的右子树接到左子树的最右边节点
// 3.考虑新的右子树的根节点，一直重复上边的过程，直到新的右子树为 null
function flatten2(root) {
    if (root === null)
        return null
    // var head = root
    while (root) {
        if (root.left === null)
            root = root.right
        else {
            var right = root.right
            var leftPart = root.left
            while (leftPart.right != null) {
                leftPart = leftPart.right
            }
            leftPart.right = right
            root.right = root.left
            root.left = null
            root = root.right
        }
    }
    // console.log(head);
}




// var node1 = new TreeNode(3)
// var node2 = new TreeNode(9)
// var node3 = new TreeNode(20)
// var node4 = new TreeNode(15)
// var node5 = new TreeNode(7)
// node1.left = node2
// node1.right = node3
// node3.left = node4
// node3.right = node5

var node1 = new TreeNode(1)
var node2 = new TreeNode(2)
var node3 = new TreeNode(3)
var node4 = new TreeNode(4)
var node5 = new TreeNode(5)
var node6 = new TreeNode(6)
node1.left = node2
node1.right = node5
node2.left = node3
node2.right = node4
node5.right = node6

var res = flatten2(node1)
console.log(res);