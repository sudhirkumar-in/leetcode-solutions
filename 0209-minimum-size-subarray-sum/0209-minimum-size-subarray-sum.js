/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let best = Infinity;

    for (let right = 0; right < nums.length; right++) {

        // 1. Add incoming
        sum += nums[right];

        // 2. While window is valid
        // 3. Update minimum
        // 4. Remove outgoing
        while (sum >= target) {
            best = Math.min(best, right - left + 1)
            sum -= nums[left];
            left++;
        }
    }

    return best === Infinity ? 0 : best;
};