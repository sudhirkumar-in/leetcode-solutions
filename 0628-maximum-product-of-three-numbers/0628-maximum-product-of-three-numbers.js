/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b)
    const top3 = nums.at(-3) * nums.at(-2) * nums.at(-1)
    const bot2top1 = nums.at(0) * nums.at(1) * nums.at(-1)
    return Math.max(top3, bot2top1);
};