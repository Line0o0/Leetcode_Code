
//Definition for singly - linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var head
    if (!l1)
        return l2
    if (!l2)
        return l1
    if ((!l1) && (!l2))
        return null
    if (l1.val > l2.val) {
        head = l2
        l2 = l2.next
    }
    else {
        head = l1
        l1 = l1.next
    }
    var cur = head
    var first = l1
    var second = l2
    while (first !== null && second !== null) {
        if (first.val > second.val) {
            cur.next = second
            cur = cur.next
            second = second.next
        }
        else {
            cur.next = first
            cur = cur.next
            first = first.next
        }
    }
    if (first === null)
        cur.next = second
    else if (second === null)
        cur.next = first
    return head
};

//非常简洁的递归做法
var mergeTwoListsRecusive = function (l1, l2) {
    if (l1 === null)
        return l2
    if (l2 === null)
        return l1
    if (l1.val > l2.val) {
        l2.next = mergeTwoListsRecusive(l1, l2.next)//这里写l2.next其实已经默认选择了较小的l2
        return l2//并且在这一步也把较小的return回去
    }
    else {
        l1.next = mergeTwoListsRecusive(l1.next, l2)
        return l1
    }
}

var node11 = new ListNode(1)
var node12 = new ListNode(2)
var node13 = new ListNode(4)
node11.next = node12
node12.next = node13
var node21 = new ListNode(2)
var node22 = new ListNode(3)
var node23 = new ListNode(4)
node21.next = node22
node22.next = node23

var node1 = null
var node2 = null

// var res = mergeTwoLists(node11, node2)
// console.log(res);

var res = mergeTwoListsRecusive(node11, node21)
while (res !== null) {
    console.log(res.val);
    res = res.next
}
