/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let set = new Set(nums2);
    for (const num of nums1) {
        if (set.has(num)) {
            return num;
        }
    }
    return 0
};