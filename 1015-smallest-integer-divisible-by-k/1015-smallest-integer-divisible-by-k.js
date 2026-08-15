/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
    // Numbers containing only 1s are always odd
    // and their digit sum is not divisible by 5.
    // Therefore, if k has factor 2 or 5, impossible.
    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }

    let remainder = 0;

    for (let length = 1; length <= k; length++) {
        remainder = (remainder * 10 + 1) % k;

        if (remainder === 0) {
            return length;
        }
    }

    return -1;
};