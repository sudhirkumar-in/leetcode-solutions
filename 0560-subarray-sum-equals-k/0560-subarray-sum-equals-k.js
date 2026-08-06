/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1);
    for (const num of nums) {
        sum += num;
        const need = sum - k;
        count += (map.get(need) ?? 0)
        map.set(sum, (map.get(sum) ?? 0) + 1)
    }
    return count;
};