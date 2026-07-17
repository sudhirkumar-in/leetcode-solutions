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
var doubleIt = function (head) {

    let current = head;
    const digits = [];
    while (current != null) {
        digits.push(current.val);
        current = current.next
    }
    let len = digits.length - 1;


    let carry = 0;
    let dubarr = []
    while (len >= 0) {
        let sum = digits[len] + digits[len] + carry;
        let digit = sum % 10;
        carry = Math.trunc(sum / 10);
        dubarr.push(digit);
        len -= 1;
    }
    if (carry) {
        dubarr.push(carry);
    }
    let dummy = new ListNode();
    current = dummy;
    len = dubarr.length - 1;
    while (len >= 0) {
        let node = new ListNode(dubarr[len]);
        console.log(node);
        current.next = node;
        current = current.next;
        len -= 1;
    }
    return dummy.next;
};