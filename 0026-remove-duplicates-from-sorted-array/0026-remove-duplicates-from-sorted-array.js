/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0;
    let n = nums.length;
    for (let right = 1; right < n; right++) {
        if (nums[right - 1] != nums[right]) {
            left++; // update left to right  
            nums[left] = nums[right];
        }
    }
    return left + 1;
};