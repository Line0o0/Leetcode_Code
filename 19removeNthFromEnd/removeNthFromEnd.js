
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head 
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head == null || n <= 0)
        return null
    var cur = head
    var cnt = 0
    while (cur != null && cnt < n) {
        cnt += 1
        cur = cur.next
    }
    if (cur === null && cnt == n)
        return head.next
    if (cnt < n)
        return null
    var tag = head
    while (cur.next != null) {
        tag = tag.next
        cur = cur.next
    }
    tag.next = tag.next.next
    return head
};

var node1 = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)
var node4 = new ListNode(4)
var node5 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
var res = removeNthFromEnd(node1, 0)
console.log(res);