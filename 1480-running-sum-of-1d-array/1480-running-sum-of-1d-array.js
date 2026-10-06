/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i]
    }
    return prefix
};