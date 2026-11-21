var longestAlternatingSubarray = function (a, threshold) {
    let n = a.length
    let max = 0

    for (let i = 0; i < n; i++) {
        if (a[i] % 2 !== 0) continue

        for (let j = i; j < n; j++) {
            let ok = 1

            for (let k = i; k <= j; k++) {
                if (
                    (k <= j - 1 && a[k] % 2 === a[k + 1] % 2) ||
                    (a[k] > threshold)
                ) {
                    ok = 0
                    break
                }
            }

            if (ok) {
                max = Math.max(max, j - i + 1)
            }
        }
    }

    return max
};
