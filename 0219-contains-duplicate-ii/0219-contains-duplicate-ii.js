/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map(); // To store the last index of each number
    
    for (let i = 0; i < nums.length; i++) {
        // If the number exists in the map and the difference in indices is <= k
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        
        // Update the map with the current index of nums[i]
        map.set(nums[i], i);
    }
    
    return false; // No valid pair found
};
