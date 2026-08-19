/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    // helper 
    const isDiv = (n, d) => n % d == 0
    const n = nums.length;
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] == nums[j] && isDiv(i * j, k)) {
                count++;
            }
        }
    }
    return count;
};