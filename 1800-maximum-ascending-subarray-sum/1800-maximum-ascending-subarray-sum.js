/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let l = nums.length;
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < l; i++) {
        let prev = nums[i - 1] || 0;
        let curr = nums[i]
        if (prev >= curr ) {
            maxSum = Math.max(maxSum, sum);
            sum = curr; // reset 
        } else {
            sum += curr;
        }
    }
    return Math.max(maxSum, sum);
};