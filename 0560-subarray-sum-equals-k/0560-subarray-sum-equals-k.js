/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let prefix = 0;
    let count = 0;
    const map = new Map();
    map.set(0, 1);
    for (const num of nums) {
        prefix += num;
        const needed = prefix - k;
        if (map.has(needed)) {
            count += map.get(needed);
        }
        map.set(prefix, (map.get(prefix) ?? 0) + 1)
    }
    return count;
};