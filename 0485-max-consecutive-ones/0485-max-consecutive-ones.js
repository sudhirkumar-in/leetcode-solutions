/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let best = 0;
    let count = 0;
    //sentinel 
    nums.push(0);
    for (const n of nums) {
        if (n === 1) {
            count++;
        } else {
            best = Math.max(best, count)
            count = 0;
        }
    }
    return best;
};