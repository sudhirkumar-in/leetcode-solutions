/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    // variable sliding window
    let left = 0;
    let zeros = 0;
    let best = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            zeros++;
        }

        while (zeros > k) {
            let leftside = nums[left++];
            if (leftside == 0) {
                zeros--;
            }
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
};