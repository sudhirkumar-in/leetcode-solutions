/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    let a = 1;
    let b = n - 1;
    const hasZero = n => n.toString().includes('0');
    while (true) {
        if (hasZero(b) || hasZero(a)) {
            a++;
            b--;
        } else {
            return [a, b];
        }
    }
};