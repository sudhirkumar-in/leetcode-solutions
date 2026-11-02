/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function (x, y, target) {
    if (target === 0) return true;

    if (target > x + y) return false;

    return target % gcd(x, y) === 0;
};

function gcd(a, b) {
    if (b === 0) return a;

    return gcd(b, a % b);
}