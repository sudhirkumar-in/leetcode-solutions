/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // so to count 0 we need 5  , 
    // count zero = n/5**1 + n/5**2 + n/5**3 ...


    let count = 0;

    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }

    return count;
};