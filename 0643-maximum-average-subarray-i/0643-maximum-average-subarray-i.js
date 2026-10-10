/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let window = 0;
    for (let i = 0; i < k; i++) {
        window += nums[i];
    }
    let bestAvg = window / k;
    for (let i = k; i < nums.length; i++) {
        // shift window
        window -= nums[i - k];
        window += nums[i];
        bestAvg = Math.max(bestAvg, window / k);
    }
    return bestAvg;
};