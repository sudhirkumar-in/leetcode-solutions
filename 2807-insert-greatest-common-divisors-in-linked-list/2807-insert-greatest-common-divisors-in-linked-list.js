/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
    let current = head;

    while (current !== null && current.next !== null) {
        let midVal = gcd(current.val, current.next.val);
        let midNode = new ListNode(midVal);

        let nextNode = current.next;

        midNode.next = nextNode;
        current.next = midNode;
        
        current = nextNode;
    }
    return head
};
function gcd(x, y) {
    if (y === 0) {
        return x;
    }
    return gcd(y, x % y);
}