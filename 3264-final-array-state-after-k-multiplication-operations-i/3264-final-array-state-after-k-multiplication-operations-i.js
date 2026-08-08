/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
    while (k--) {
        //get min index 
        const min = Math.min(...nums);
        const ind = nums.indexOf(min);
        nums[ind] = min * multiplier
    }
    return nums;
};