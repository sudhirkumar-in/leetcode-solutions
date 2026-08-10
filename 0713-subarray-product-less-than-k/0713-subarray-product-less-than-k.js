/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let left = 0;
    let product = 1;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {

        // incoming
        product *= nums[right]

        // shrink while invalid
        while (product >= k) {

            // outgoing
            product /= nums[left]


            left++;
        }

        // count valid subarrays ending at right
        count += right - left + 1

    }

    return count < 0 ? 0 : count;
};