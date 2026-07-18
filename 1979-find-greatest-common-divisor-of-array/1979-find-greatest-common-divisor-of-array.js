/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let min = Infinity
    let max = 0
    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    return gcd(min, max);

};
function gcd(x, y) {
    if (y === 0) {
        return x;
    }
    return gcd(y, x % y);
}