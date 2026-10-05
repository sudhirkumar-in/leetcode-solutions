function findMedianSortedArrays(a: number[], b: number[]): number {
    let tot = a.length + b.length
    if (tot === 1) {
        return a[0] ?? b[0]
    }

    let pqA = new PriorityQueue<number>((a, b) => b - a)
    let pqB = new PriorityQueue<number>((a, b) => a - b)

    for (let e of a) pqA.enqueue(e)
    for (let e of b) pqB.enqueue(e)

    while (pqA.size() > pqB.size()) {
        pqB.enqueue(pqA.dequeue())
    }
    while (pqA.size() < pqB.size()) {
        pqA.enqueue(pqB.dequeue())
    }
    // a size is  1 extra or equal  to b size

    while (pqA.front() > pqB.front()) {
        pqA.enqueue(pqB.dequeue())
        pqB.enqueue(pqA.dequeue())
    }
    // all eles of a <= all of b   => ascending

    let n = pqA.size() + pqB.size()
    if (n % 2 === 1) {
        return pqA.front()
    } else {
        let avg = (pqA.front() + pqB.front()) / 2
        return avg
    }
}

function findMedianSortedArrays333(a: number[], b: number[]): number {
    let c = mergeSort(a, b)
    let n = c.length

    if (n % 2 === 0) {
        let half = n / 2

        let sum = c[half - 1] + c[half]
        let avg = sum / 2
        return avg
    } else {
        return c[Math.trunc(n / 2)]
    }
};

function mergeSort(a, b) {
    let m = a.length
    let n = b.length

    let i = 0
    let j = 0
    let c = []

    while (i < m && j < n) {
        if (a[i] <= b[j]) {
            c.push(a[i])
            i++
        } else {
            c.push(b[j])
            j++
        }
    }

    while (i < m) {
        c.push(a[i])
        i++
    }
    while (j < n) {
        c.push(b[j])
        j++
    }

    return c
}

function findMedianSortedArrays2222(a: number[], b: number[]): number {
    let c =
        [...a, ...b]
            .sort((a, b) => a - b)

    let n = c.length

    if (n % 2 === 0) {
        let half = n / 2

        let sum = c[half - 1] + c[half]
        let avg = sum / 2
        return avg
    } else {
        return c[Math.trunc(n / 2)]
    }
};
