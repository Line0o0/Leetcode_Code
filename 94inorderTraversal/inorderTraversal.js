
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//递归做法
// var inorderTraversal = function (root) {
//     var res = []
//     if (root === null)
//         return res

//     function inorder(node) {
//         if (node === null)
//             return
//         inorder(node.left)
//         res.push(node.val)
//         inorder(node.right)
//         return
//     }

//     inorder(root)
//     return res
// };

var inorderTraversalWrong = function (root) {
    var res = []
    if (root === null)
        return res
    var stack = [],
        node = root
    stack.push(root)
    while (stack.length !== 0 || node !== null) {
        node = stack
        while (node.left !== null) {
            node = node.left
            stack.push(node)
        }
        node = stack.pop()
        res.push(node.val)
        if (node.right !== null)
            stack.push(node.right)
    }
};

//上面的做法是错误的，有一个访问过的节点会重复入栈的问题
//那到底是怎么解决的呢？
var inorderTraversal = function (root) {
    var res = []
    if (root === null)
        return res
    var stack = [],
        node = root
    while (stack.length !== 0 || node !== null) {
        while (node !== null) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        res.push(node.val)
        node = node.right//实际上是通过这一步解决的，当right==null时，下一次循环时根本不会进入上面while循环
    }
    return res
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

// var node1 = new TreeNode(1)
// var node2 = new TreeNode(2)
// var node3 = new TreeNode(3)
// node1.right = node2
// node2.left = node3

var res = inorderTraversal(node1)
console.log(res);