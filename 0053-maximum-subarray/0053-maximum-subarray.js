/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // start new array 
    // or continue 
    let sum = 0;
    let maxSum = -Infinity;
    for (const num of nums) {

        sum = Math.max(num, sum + num)

        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};
