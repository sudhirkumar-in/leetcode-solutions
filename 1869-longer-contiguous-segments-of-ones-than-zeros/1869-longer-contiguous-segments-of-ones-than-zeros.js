
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let maxOne = 0;
    let maxZero = 0;

    let ones = 0;
    let zeros = 0;

    for (const ch of s) {
        if (ch === '1') {
            ones++;
            zeros = 0;
            maxOne = Math.max(maxOne, ones);
        } else {
            zeros++;
            ones = 0;
            maxZero = Math.max(maxZero, zeros);
        }
    }

    return maxOne > maxZero;
};
