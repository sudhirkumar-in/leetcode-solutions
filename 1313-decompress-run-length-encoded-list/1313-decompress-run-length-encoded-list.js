/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    const res = [];
    const n = nums.length;
    for (let i = 0; i < n; i += 2) {
        let freq = nums[i];
        const val = nums[i + 1];
        while (freq--) {
            res.push(val)
        }
    }
    return res
};