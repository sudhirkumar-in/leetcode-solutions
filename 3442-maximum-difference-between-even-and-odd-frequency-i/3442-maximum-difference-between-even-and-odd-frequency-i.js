/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let map = new Map();
    for (const ch of s.split('')) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let leastEven = Infinity;
    let bestOdd = -Infinity;
    for (const [key, value] of map.entries()) {
        if (value % 2 == 0) {
            leastEven = Math.min(leastEven, value);
        } else {
            bestOdd = Math.max(bestOdd, value);
        }
    }
    return bestOdd - leastEven;
};