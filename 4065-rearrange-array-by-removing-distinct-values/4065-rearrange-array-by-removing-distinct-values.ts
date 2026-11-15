function rearrangeArray(a: number[]): number[] {
    let freq = new Map()

    for (let e of a) {
        freq.set(e, (freq.get(e) ?? 0) + 1)
    }

    let res = []

    while (freq.size) {
        let arr = []

        for (let [e, f] of freq) {
            arr.push(e)
            freq.set(e, freq.get(e) - 1)

            if (freq.get(e) === 0) {
                freq.delete(e)
            }
        }

        res.push(...arr.sort((a, b) => a - b))
    }

    return res
}

function rearrangeArray2222222(a: number[]): number[] {
    let n = a.length
    let MAX_VAL = 100
    let freq = new Array(MAX_VAL + 1).fill(0)

    for (let e of a) {
        freq[e]++
    }

    let max = Math.max(...a)
    let min = Math.min(...a)
    let prevLen = -Infinity
    let res = []

    while (prevLen !== res.length) {
        if (prevLen === res.length) break
        prevLen = res.length

        for (let e = min; e <= max; e++) {
            if (!freq[e]) continue

            res.push(e)
            freq[e]--

            if (freq[e] === 0) {

                while (freq[min] === 0) {
                    min++
                }
                while (freq[max] === 0) {
                    max--
                }
            }
        }
    }

    return res
};
