/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let prod = 1;
    let res = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        prod *= nums[right];
        while (prod >= k) {
            prod /= nums[left++]
        }
        res += (right - left + 1);
    }
    return Math.max(res, 0);
};
