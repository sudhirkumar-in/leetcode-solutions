/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // formula is 
    // left + x + right = totalSum;
    let left = 0;
    let right = 0
    const totalSum = nums.reduce((num, sum) => num + sum, 0);
    for (let i = 0; i < nums.length; i++) {
        right = totalSum - (left + nums[i]);
        if (left === right) {
            return i;
        }
        left += nums[i];

    }
    return -1;
};