/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    // let odds = nums.map(v => v % 2 == 1 ? 1 : 0);
    let map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;
    for (const num of nums) {
        sum += (num % 2 == 1 ? 1 : 0);
        const need = sum - k;
        if (map.has(need)) {
            count += (map.get(need) ?? 0)
        }
        map.set(sum, (map.get(sum) ?? 0) + 1)
    }
    return count;
};