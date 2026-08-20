/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const total = []
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        total[nums[i]] = (total[nums[i]] ?? 0) + nums[i];
    }
    const dp = []
    dp[0] = total[0] ?? 0;
    dp[1] = total[1] ?? 0;
    const maxNum = Math.max(...nums);
    for (let i = 2; i <= maxNum; i++) {
        dp[i] = Math.max(
            dp[i - 1],
            dp[i - 2] + (total[i] ?? 0)
        );
    }
    return dp[maxNum];
};