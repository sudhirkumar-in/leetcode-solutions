/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    // edge
    if (n < 1000) return '' + n;
    let res = '';
    let count = 0
    while (n) {
        const d = n % 10;
        n = Math.trunc(n / 10)
        if (count == 3) {
            count = 0;
            res = '.' + res;
        }
        res = d + res;
        count++;
    }
    return res;
};