function maxProductPair(
    A: number[],
    t: number
): number[] {
    let n = A.length

    let a = A
        .map((e, i) => [e, i])
        .sort((a, b) => b[0] - a[0])

    let maxp = -Infinity
    let maxi
    let maxj

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (
                (a[i][0] !== a[j][0]) &&
                ((a[i][0] + a[j][0]) === t)
            ) {
                let p = a[i][0] * a[j][0]
                if (p > maxp) {
                    maxp = p;
                    [maxi, maxj] = [a[i][1], a[j][1]]
                }
            }
        }
    }

    if (maxp === -Infinity) {
        return [-1, -1]
    }

    return [maxi, maxj]
};