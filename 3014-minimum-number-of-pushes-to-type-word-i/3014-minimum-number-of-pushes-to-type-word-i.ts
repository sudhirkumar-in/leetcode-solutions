function minimumPushes(word: string): number {
    let n = word.length
    let res = 0

    for (let i = 1; i <= n; i++) {
        if (i <= 8) {
            res += 1
        } else if (i <= 16) {
            res += 2
        } else if (i <= 24) {
            res += 3
        } else {
            res += 4
        }
    }

    return res
};
