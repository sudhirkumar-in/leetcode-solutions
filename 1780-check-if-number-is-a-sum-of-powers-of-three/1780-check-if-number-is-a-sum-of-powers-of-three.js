/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    // so the n should divide by 3 
    // if the rem is 2 then false
    while (n) {
        if (n % 3 == 2) return false;
        n = Math.trunc(n / 3);
    }
    return true;
};