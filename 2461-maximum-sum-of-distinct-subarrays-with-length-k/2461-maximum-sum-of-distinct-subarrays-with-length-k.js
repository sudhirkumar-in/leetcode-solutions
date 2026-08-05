/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {

    let freq = new Map();
    let sum = 0;
    for (let i = 0; (i < k && nums.length >= k); i++) {
        sum += nums[i];
        freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1)
    }
    let maxSum = 0
    if (freq.size === k) {
        maxSum = sum;
    }
    const n = nums.length;
    for (let i = k; i < n; i++) {
        sum -= nums[i - k]
        sum += nums[i]
        if (freq.get(nums[i - k]) > 1) {
            freq.set(nums[i - k], freq.get(nums[i - k]) - 1)
        } else {
            freq.delete(nums[i - k])
        }

        freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1);

        if (freq.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};