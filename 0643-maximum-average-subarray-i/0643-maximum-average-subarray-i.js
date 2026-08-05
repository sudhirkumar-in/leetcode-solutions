/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // let maxAvg = null;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let maxAvg = sum / k;
    let n = nums.length;
    for (let i = k; i < n; i++) {
        sum -= nums[i - k];
        sum += nums[i]
        maxAvg = Math.max(maxAvg, sum / k)
    }
    return maxAvg;
};