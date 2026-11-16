var swapPairs = function (head) {
    let dummy = new ListNode(-1, head)
    // let pp, p, n
    // let cl = console.log

    // cl(dummy)
    for (let t = dummy; t?.next;) {

        let pp
        let p = t
        t = t.next;
        if (!t) break

        pp = p
        p = t
        t = t.next;

        if (!t) break
        let n = t.next

        // cl()
        // cl(pp.val, p.val, t.val, n?.val)

        // [t.val, p.val] = [p.val, t.val]

        // pp   p  t  n 
        pp.next = t
        t.next = p
        p.next = n

        // cl(dummy)

        t = t.next
    }

    return dummy.next
};
