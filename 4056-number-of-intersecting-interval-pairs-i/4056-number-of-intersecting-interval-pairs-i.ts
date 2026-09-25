function countIntersectingIntervals(ints: number[][]): number {
    let n = ints.length

    ints.sort((a, b) => a[0] - b[0])

    let res = 0

    for (let i = 0; i < n; i++) {
        let [s, e] = ints[i]

        for (let j = i + 1; j < n; j++) {
            let [s2, e2] = ints[j]

            if (s <= s2 && s2 <= e) {
                res++
            } else if (e < s2) {
                break
            }
        }
    }

    return res
};
