/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    const [sum, prod] = digitSumProduct(n);
    return n % (sum + prod) === 0
};
function digitSumProduct(n) {
    let sum = 0;
    let prod = 1;
    while (n > 0) {
        const digit = n % 10;
        n = Math.trunc(n / 10);
        sum += digit;
        prod *= digit;
    }
    return [sum, prod];
}