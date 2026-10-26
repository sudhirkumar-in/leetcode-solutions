/**
 * @param {number[]} nums
 * @return {number}
 */
var peakValleyDifference = function (nums) {
    const n = nums.length;
    let sp = 0;
    let sv = 0;
    for (let i = 1; i + 1 < n; i++) {
        const p = nums[i - 1]
        const c = nums[i]
        const n = nums[i + 1]
        if (c > p && c > n) {
            sp += nums[i]
        }
        if (c < p && c < n) {
            sv += nums[i]
        }
    }
    return sp - sv;
};