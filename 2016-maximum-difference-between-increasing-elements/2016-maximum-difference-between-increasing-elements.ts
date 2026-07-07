function maximumDifference(nums: number[]): number {
    let minSoFar = null;
    let bestDiff = -1;
    for (const num of nums) {
        if (num < minSoFar) {
            minSoFar = num;
        }
        if (minSoFar == null) {
            minSoFar = num;
            continue;
        } else {
            bestDiff = Math.max(bestDiff, num - minSoFar);
        }
    }
    return bestDiff || -1;
};