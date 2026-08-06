/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    const total = nums.reduce((s, n) => s + n, 0);
    let left = 0;
    for (const [i, num] of nums.entries()) {
        // left + num + right = total 
        const right = total - num - left
        if (left == right) {
            return i;
        }
        left += num;
    }
    return -1;
};