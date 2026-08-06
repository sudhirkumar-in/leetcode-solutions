/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let sum = 0;
    let count = 0;
    const map = new Map()
    map.set(0, 1);
    for (const num of nums) {
        sum += num;
        const need = sum - goal;

        if (map.has(need)) {
            count += map.get(need) ?? 0
        }

        map.set(sum, (map.get(sum) ?? 0) + 1)

    }
    return count
};