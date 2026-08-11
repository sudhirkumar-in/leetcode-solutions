/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    let max = 0;
    const n = nums.length
    for (let r in nums) {
        let firstDiagonal = nums[r][r]
        let secondDiagonal = nums[r][n - 1 - r]
        if (isPrime(firstDiagonal)) {
            max = Math.max(max, firstDiagonal);
        }
        if (isPrime(secondDiagonal)) {
            max = Math.max(max, secondDiagonal);
        }
    }
    return max
};
function isPrime(n) {
    if (n < 2) return false
    if (n === 2) return true
    if (n % 2 === 0) return false
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}