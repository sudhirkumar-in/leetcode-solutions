function numberGame(a: number[]): number[] {
    let pq = new PriorityQueue<number>((a, b) => a - b)
    let res = []

    for (let e of a) {
        pq.enqueue(e)
    }

    while (!pq.isEmpty()) {
        let al = pq.dequeue()
        let bo = pq.dequeue()

        res.push(bo, al)
    }

    return res
};

function numberGame222222(a: number[]): number[] {
    a.sort((a, b) => a - b)
    let res = []

    while (a.length) {
        let al = a.shift()
        let bo = a.shift()

        res.push(bo, al)
    }

    return res
};
