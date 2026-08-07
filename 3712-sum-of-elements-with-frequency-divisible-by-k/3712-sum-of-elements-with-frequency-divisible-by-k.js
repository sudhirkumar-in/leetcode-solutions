/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    let f = {}
    for (let e of nums) {
        f[e] = (f[e] ?? 0) + 1
    }

    let s = 0
    for (let e in f) {
        let ct = f[e]

        if (ct % k === 0) {
            s += +e * ct
        }
    }

    return s
};