/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = 0;
    let sum = nums.reduce((s, n) => s + n, 0);

    for (const [i, num] of nums.entries()) {
        //  left + x + right = sum 
        const right = sum - num - left;
        if (left == right) {
            return i;
        }
        left += num;
    }
    return -1;
};