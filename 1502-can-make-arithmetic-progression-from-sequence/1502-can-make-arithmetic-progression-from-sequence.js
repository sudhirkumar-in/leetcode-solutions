/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b);
    const diff = arr[1] - arr[0];
    const n = arr.length
    for (let i = 1; i < n; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false
        }
    }
    return true
};