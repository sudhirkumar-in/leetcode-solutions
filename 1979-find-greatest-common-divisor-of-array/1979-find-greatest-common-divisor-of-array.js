/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let a = Math.max(...nums);
    let b = Math.min(...nums);
    return gcd(a, b);
};
function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b)
    }
}