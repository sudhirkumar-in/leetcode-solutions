/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let best = 0;
    let map = new Map();
    let sum = 0 ; 
    nums = nums.map(v => v == 1 ? 1 : -1);
    for (let i = 0; i < nums.length; i++) {
         sum += nums[i]
        map.set(0, -1);
        if (map.has(sum)) {
            best = Math.max(best, i - map.get(sum))
        } else {
            map.set(sum, i);
        }

    }

    // here k = 0 , so that sum = crur - prev , 0 = cur- prev
    // prev = sum;
    return best;
};