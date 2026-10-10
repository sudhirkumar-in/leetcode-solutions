/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let count = 0;
    for (const num of nums) {
        if (num == 1) {
            count++;

        } else {
            max = Math.max(max, count);
            // reset
            count = 0;
        }
    }
    // remaining
    max = Math.max(max, count);
    return max;
};