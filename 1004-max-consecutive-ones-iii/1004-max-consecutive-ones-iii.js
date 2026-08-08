/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    const n = nums.length;
    let zeros = 0;
    let best = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
        // incoming
        if (nums[right] === 0) {
            zeros++;
        }
        // shrink if invalid
        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }



        // update best
        best = Math.max(best, right - left + 1)

    }
    return best
};