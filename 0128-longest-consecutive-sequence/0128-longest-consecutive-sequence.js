/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums = [...new Set(nums)]
    nums.sort((a, b) => a - b);
    nums.push(Infinity); // sentinal
    let best = 0;
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        const curr = nums[i];
        const next = nums[i + 1];
        if (curr == next) continue;
        if (curr + 1 === next) {
            count += 1;
            continue;
        }

        best = Math.max(best, count);
        count = 1; // reset
    }
    return best;
};