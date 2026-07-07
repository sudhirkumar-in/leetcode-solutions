function maximumDifference(nums: number[]): number {
    let minSoFar = nums[0];
    let bestDiff = -1;
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        bestDiff = Math.max(bestDiff, num - minSoFar);
        minSoFar = Math.min(minSoFar, num);

    }
    return bestDiff || -1;
};