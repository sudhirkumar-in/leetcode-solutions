/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    // use freq
    let map = new Map();
    let sum = 0;
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map.entries()) {
        if (value == 1) {
            sum += key;
        }
    }
    return sum;
};