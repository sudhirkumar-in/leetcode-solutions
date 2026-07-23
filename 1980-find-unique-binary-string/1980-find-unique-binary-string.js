/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const numSet = new Set(nums);
    let x = 0;

    while (true) {
        const s = x.toString(2).padStart(nums.length, '0');
        if (!numSet.has(s)) return s;
        x++;
    }
};