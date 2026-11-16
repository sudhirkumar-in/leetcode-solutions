var mergeInBetween = function (head1, a, b, head2) {
    let t1 = head1;
    for (let i = 0; i < a - 1; i++) {
        t1 = t1.next;
    }

    let t2 = head1
    for (let i = 0; i < b; i++) {
        t2 = t2.next;
    }

    t1.next = head2;

    let t3 = head2;
    while (t3.next) {
        t3 = t3.next;
    }

    t3.next = t2.next;

    return head1;
};
