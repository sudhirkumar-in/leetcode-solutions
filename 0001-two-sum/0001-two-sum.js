/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (const [i, num] of nums.entries()) {
        const need = target - num
        if (map.has(need)) {
            return [map.get(need), i];
        }
        map.set(num, i);
    }
};