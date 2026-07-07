/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    if (nums.length == 1) return true;
    if (nums[0] == nums[1]) {
        return monoInc(nums) || monoDec(nums);
    }
    if (nums[0] < nums[1]) {
        return monoInc(nums);
    } else {
        return monoDec(nums);
    }
};
function monoInc(nums) {
    for (let i = 0; i + 1 < nums.length; i++) {
        if (nums[i] <= nums[i + 1]) {
            continue;
        } else {
            return false
        }
    }
    return true;
}
function monoDec(nums) {
    for (let i = 0; i + 1 < nums.length; i++) {
        if (nums[i] >= nums[i + 1]) {
            continue;
        } else {
            return false
        }
    }
    return true;
}