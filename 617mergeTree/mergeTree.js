
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    //var node0 = new TreeNode(0)//放一个共用，就不用重复申请多次
    function preOrder(t1, t2) {
        if (t1 === null && t2 === null)
            return null
        else if (!t1)
            return t2
        else if (!t2)
            return t1
        // var value = t1.val + t2.val
        // var node = new TreeNode(value)
        //在原有的树上改就好了
        t1.val = t1.val + t2.val
        t1.left = preOrder(t1.left, t2.left)
        t1.right = preOrder(t1.right, t2.right)
        return t1
    }
    var res = preOrder(t1, t2)
    return res
};



var node1 = new TreeNode(1)
var node2 = new TreeNode(3)
// var node3 = new TreeNode(2)
// var node4 = new TreeNode(5)
// var node5 = new TreeNode(2)
// var node6 = new TreeNode(3)
// var node7 = new TreeNode(2)
// var node8 = new TreeNode(5)
// var node9 = new TreeNode(2)
// node1.left = node2
// node1.right = node3
// node3.left = node4
// node3.right = node5

var res = mergeTrees(null, null)
console.log(res);
