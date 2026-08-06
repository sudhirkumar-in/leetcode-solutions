/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0;
    let right = 1;
    const res = []
    let n = nums.length;
    while (right < n) {
        if (nums[right - 1] != nums[right]) {
            // replace right to left  
            left++;
            nums[left] = nums[right];
        }
        // every time right will go onword
        right++;
    }

    return left + 1;
};