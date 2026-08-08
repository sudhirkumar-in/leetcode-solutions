/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    //  exactly(goal) = atMost(goal) - atMost(goal - 1)
    if (goal == 0) {
        return atMost(nums, goal);
    }
    return atMost(nums, goal) - atMost(nums, goal - 1)
};
function atMost(nums, goal) {
    let left = 0;
    let ones = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {

        // incoming
        if (nums[right] === 1) {
            ones++;
        }

        // shrink while invalid
        while (ones > goal) {
            if (nums[left] === 1) {
                ones--
            }
            left++
        }

        // count valid subarrays ending at right
        count += (right - left + 1)
    }

    return count;
}