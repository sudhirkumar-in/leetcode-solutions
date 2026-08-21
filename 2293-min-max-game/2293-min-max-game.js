/**
 * @param {number[]} nums
 * @return {number}
 */
function minMaxGame(a) {
    while (a.length > 1) {
        let n = a.length
        let b = new Array(n / 2)

        for (let i = 0; i < n / 2; i++) {
            if (i % 2 == 0) {
                b[i] = Math.min(a[2 * i], a[2 * i + 1])
            } else {
                b[i] = Math.max(a[2 * i], a[2 * i + 1])
            }
        }
        a = b
    }

    return a[0]
};