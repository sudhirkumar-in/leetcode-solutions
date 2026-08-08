/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;// first k ;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let bestSum = sum;
    const n = nums.length;
    for (let i = k; i < n; i++) {
        // remove last
        sum -= nums[i - k];
        // add new 
        sum += nums[i]
        // get the result
        bestSum = Math.max(bestSum, sum);

    }
    return bestSum / k;
};