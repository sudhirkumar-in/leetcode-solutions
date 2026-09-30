let cl = console.log
function maxTwoEvents(ints: number[][]): number {
    let a = ints
    let n = ints.length

    if (n === 0) return 0

    ints.sort((a, b) => a[0] - b[0])

    let smaxs = new Array(n)
    let max = -Infinity

    for (let i = n - 1; i >= 0; i--) {
        max = Math.max(max, ints[i][2])
        smaxs[i] = max
    }

    let res = 0

    for (let i = 0; i < n; i++) {
        let [s, e, v] = a[i]
        res = Math.max(res, v)

        let j = upperBound(e, a, i + 1)

        if (i < j && j !== n) {
            let [s2, e2, v2] = a[j]

            if (e < s2 || e2 < s) {
                let vmax = smaxs[j]
                res = Math.max(res, v + vmax)
            }
        }
    }

    return res
};

function upperBound(target, a, lo = 0, hi = a.length) {
    while (lo < hi) {
        let mid = lo + Math.trunc((hi - lo) / 2);
        // let mid = Math.trunc(lo + hi) / 2

        if (target >= a[mid][0]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return lo;
}
