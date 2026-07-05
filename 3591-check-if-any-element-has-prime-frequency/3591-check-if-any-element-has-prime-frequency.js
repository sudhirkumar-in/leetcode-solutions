/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const [key, value] of map.entries()) {
        if (isPrime(value) == true) {
            return true;
            break;
        }
    }
    return false;

};

function isPrime(n) {
    if (n <= 1) return false
    if (n == 2) return true;
    if (n % 2 == 0) { return false; }
    for (let div = 3; div <= Math.sqrt(n); div += 2) {
        if (n % div == 0) { return false; }
    }
    return true;
}