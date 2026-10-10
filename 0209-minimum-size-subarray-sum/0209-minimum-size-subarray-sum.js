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

        sum += nums[right];

        while (sum >= target) {
            const len = (right - left) + 1
            best = Math.min(best, len);
            sum -= nums[left++];
        }

    }
    return best === Infinity ? 0 : best;
};