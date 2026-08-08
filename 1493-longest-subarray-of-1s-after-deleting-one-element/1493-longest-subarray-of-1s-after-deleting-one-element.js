/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0;
    let zeros = 0;
    let best = 0;

    for (let right = 0; right < nums.length; right++) {

        // Add incoming element
        if (nums[right] === 0) {
            zeros++;
        }

        // Shrink until window is valid
        while (zeros > 1) {
            if (nums[left] === 0) {
                zeros--;
            }

            left++;
        }

        // Delete exactly one element
        best = Math.max(best, right - left);
    }

    return best;
};