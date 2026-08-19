/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // State:
    // dp[i] = maximum money we can rob from houses 0...i
    const dp = []
    // Base cases:
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    // Transition:
    const n = nums.length;
    for (let i = 2; i < n; i++) {

        dp[i] = Math.max(
            dp[i - 1],              // skip house i
            dp[i - 2] + nums[i]     // rob house i
        )
    }
    return dp[n - 1];
};