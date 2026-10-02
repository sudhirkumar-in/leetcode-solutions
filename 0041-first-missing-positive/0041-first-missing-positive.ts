function firstMissingPositive(a: number[]): number {
    let n = a.length
    let has1 = false
    let hasn = false

    for (let i = 0; i < n; i++) {
        if (a[i] === 1) has1 = true
        if (a[i] === n) hasn = true
        if (a[i] <= 0) a[i] = 1
        if (a[i] >= n) a[i] = 1
    }

    if (!has1) return 1

    for (let i = 0; i < n; i++) {
        let e = Math.abs(a[i])
        if (e < n) {
            a[e] = -Math.abs(a[e])
        }
    }

    for (let e = 1; e < n; e++) {
        if (a[e] < 0) {
        } else {
            return e
        }
    }

    if (!hasn) return n

    return n + 1
}

function firstMissingPositive22222(a: number[]): number {
    let set = new Set(a)

    for (let i = 1; ; i++) {
        if (!set.has(i)) {
            return i
        }
    }
};
