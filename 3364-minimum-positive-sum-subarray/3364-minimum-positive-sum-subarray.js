var minimumSumSubarray = function (nums, l, r) {
    const prefix = [0];  // Prefix sum array, starting with a 0
    // Build the prefix sum array
    for (let i = 0; i < nums.length; i++) {
        prefix.push(prefix[i] + nums[i]);
    }

    let minSum = Infinity; // To track the minimum sum of valid subarrays

    // Iterate through possible subarray lengths between l and r
    for (let length = l; length <= r; length++) {
        // Iterate through all subarrays of this length
        for (let i = 0; i <= nums.length - length; i++) {
            const sum = prefix[i + length] - prefix[i]; // Calculate sum of subarray [i, i + length - 1]
            if (sum > 0) {
                minSum = Math.min(minSum, sum);  // Update minSum if the sum is positive and smaller than the current minSum
            }
        }
    }

    // Return the result: if minSum was updated, return it; otherwise, return -1
    return minSum === Infinity ? -1 : minSum;
};
