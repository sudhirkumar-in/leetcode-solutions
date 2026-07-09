/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    const windowMap = new Map();

    let windowSum = 0;
    let bestSum = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        // update window map , sub last  , then add new
        let curr = nums[i]
        windowMap.set(curr, (windowMap.get(curr) ?? 0) + 1)
        windowSum += curr;

        if (i >= k) {
            let last = nums[i - k];
            windowSum -= last
            const count = windowMap.get(last);

            if (count === 1) {
                windowMap.delete(last);
            } else {
                windowMap.set(last, count - 1);
            }
        }
        if (windowMap.size == k) {
            bestSum = Math.max(bestSum, windowSum);
        }

    }

    return bestSum
};