/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1);
};
function atMost(nums, k) {
    let left = 0;
    const window = new Map();
    let count = 0;
    for (let right = 0; right < nums.length; right++) {
        // incomming
        const num = nums[right];
        // update the window 
        window.set(num, (window.get(num) ?? 0) + 1)
        // make it valid 
        while (window.size > k) {
            const leftNum = nums[left];
            const leftNumCount = window.get(leftNum) - 1;
            if (leftNumCount === 0) {
                window.delete(leftNum);
            } else {
                window.set(leftNum, leftNumCount);
            }

            left++
        }
        // update the counter
        count += right - left + 1
    }
    return count
}