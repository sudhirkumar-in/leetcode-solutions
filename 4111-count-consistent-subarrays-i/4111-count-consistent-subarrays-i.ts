function countConsistent(a: number[]): number {
    let n = a.length
    let ct = 0

    for (let i = 0; i < n; i++) {
        let and = a[i]
        let min = a[i]

        for (let j = i; j < n; j++) {
            and = and & a[j]
            min = Math.min(min, a[j])

            if (and === min) {
                ct++
            }
        }
    }

    return ct
};
