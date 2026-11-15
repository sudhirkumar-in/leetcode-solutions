var minimumDistance = function (a) {
    let n = a.length
    let min = Infinity

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {

                if (
                    a[i] == a[j] &&
                    a[j] == a[k]
                ) {
                    let d =
                        Math.abs(i - j) +
                        Math.abs(j - k) +
                        Math.abs(k - i)
                    min = Math.min(min, d)
                }
            }
        }
    }

    if (min === Infinity) return -1

    return min
};
