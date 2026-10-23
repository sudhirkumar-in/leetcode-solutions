function answerQueries(a: number[], qs: number[]): number[] {
    let res = []
    a.sort((a, b) => a - b)

    for (let q of qs) {
        let s = 0
        let i = 0

        while (s + a[i] <= q) {
            s += a[i]
            i++
        }

        res.push(i)
    }

    return res
};
