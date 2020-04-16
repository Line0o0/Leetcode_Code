
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (l1 === null || l2 === null)
        return null
    return makeList(l1, l2, 0)
};

function makeList(l1, l2, lastInc) {
    if (l1 === null && l2 === null)
        if (lastInc == 0)
            return null
        else {
            var node = new ListNode(1)
            return node
        }

    if (l1 === null) {
        return makeSingleLink(l2, lastInc)
    }
    if (l2 === null) {
        return makeSingleLink(l1, lastInc)
    }

    var node, inc
    obj = makeNode(l1, l2, lastInc)
    node = obj.Node
    inc = obj.Inc
    node.next = makeList(l1.next, l2.next, inc)
    return node
}

function makeSingleLink(l, lastInc) {
    if (l === null && lastInc == 0)
        return null
    if (l === null && lastInc == 1)
        return new ListNode(1)
    l.val = l.val + lastInc
    if (l.val < 10) {
        return l
    }
    else {
        l.val = l.val % 10
        l.next = makeSingleLink(l.next, 1)
        return l
    }
}

function makeNode(node1, node2, inc) {
    var node = new ListNode()
    var sum = node1.val + node2.val + inc
    node.val = sum % 10
    if (sum >= 10)
        return {
            Node: node,
            Inc: 1
        }
    else
        return {
            Node: node,
            Inc: 0
        }
}

// var node1 = new ListNode(2)
// var node2 = new ListNode(4)
// var node3 = new ListNode(3)
// var node4 = new ListNode(5)
// var node5 = new ListNode(6)
// var node6 = new ListNode(4)
// node1.next = node2
// node2.next = node3
// node4.next = node5
// node5.next = node6

// var node00 = new ListNode(1)
// var node01 = new ListNode(5)

var node1 = new ListNode(2)
var node2 = new ListNode(8)
var node3 = new ListNode(9)
var node4 = new ListNode(8)
var node5 = new ListNode(9)

node2.next = node3
node3.next = node4
node4.next = node5
var res = addTwoNumbers(node1, node2)
console.log(res);
