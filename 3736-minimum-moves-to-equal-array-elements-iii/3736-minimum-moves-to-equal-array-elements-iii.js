/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const max = Math.max(...nums);
    let sum = 0;
    for (const num of nums) {
        sum += (max - num)
    }
    return sum;
};