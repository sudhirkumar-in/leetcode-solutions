/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    let count = 0;
    for (let n = left; n <= right; n++) {
        let ones = countSetBits(n);
        if (primeSet.has(ones)) {
            count += 1;
        }
    }
    return count;
};
function countSetBits(n) {
    let count = 0;

    while (n > 0) {
        count += n & 1;
        n >>= 1;
    }

    return count;
}