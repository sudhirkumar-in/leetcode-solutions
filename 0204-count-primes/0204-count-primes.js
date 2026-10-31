/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    n = n - 1
    // edge
    if (n < 2) {
        return 0
    }
    if (n == 2) {
        return 1
    }
    let count = 1; // for n is 2 
    for (let i = 3; i <= n; i++) {
        if (isPrime(i)) {
            count++
        }
    }
    return count;
};
function isPrime(n) {
    if (n % 2 === 0) return false;
    for (let d = 3; d ** 2 <= n; d += 2) {
        if (n % d === 0) {
            return false;
        }
    }
    return true;
}