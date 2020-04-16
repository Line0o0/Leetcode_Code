
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
    // if (l1 === null && l2 === null)
    //     return null
    var head = new ListNode(0)//先赋什么值都没关系
    var cur = head
    var carry = 0
    while (l1 !== null || l2 !== null) {
        var x = l1 == null ? 0 : l1.val
        var y = l2 == null ? 0 : l2.val
        var sum = x + y + carry
        carry >> 2
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        if (l1 !== null)
            l1 = l1.next
        if (l2 !== null)
            l2 = l2.next

    }
    if (carry == 1) {
        cur.next = new ListNode(carry);
    }
    return head.next
};

var node1 = new ListNode(2)
var node2 = new ListNode(4)
var node3 = new ListNode(3)
var node4 = new ListNode(5)
var node5 = new ListNode(6)
var node6 = new ListNode(4)
node1.next = node2
node2.next = node3
node4.next = node5
node5.next = node6

var res = addTwoNumbers(node1, node4)
console.log(res);