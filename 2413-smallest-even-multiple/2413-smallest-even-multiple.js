/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    const lcm = (2 * n) / gcd(2, n);
    return lcm;
};
function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}