/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
    let map = new Map();
    for (const n of nums) {
        if (n % 2 == 0) {
            map.set(n, (map.get(n) || 0) + 1);
        }
    }
    for (const n of nums) {
        if (n % 2 == 0) {
            let val = map.get(n);
            if (val == 1) {
                return n;
            }
        }
    }
    return -1;
};