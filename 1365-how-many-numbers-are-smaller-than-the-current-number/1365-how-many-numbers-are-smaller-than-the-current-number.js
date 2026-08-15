/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const freq = {};
    let max = 0
    for (const num of nums) {
        max = Math.max(max, num);
        freq[num] = (freq[num] ?? 0) + 1
    }

    let prefix = {}
    for (let i = 0; i <= max; i++) {
        prefix[i] = (prefix[i - 1] ?? 0) + (freq[i - 1] ?? 0)
    }

    return nums.map(v => prefix[v])
};