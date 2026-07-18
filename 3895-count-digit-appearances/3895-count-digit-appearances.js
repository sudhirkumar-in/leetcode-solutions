/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function (nums, digit) {
    return nums.join('').split('').filter(v => v == digit).length;
};