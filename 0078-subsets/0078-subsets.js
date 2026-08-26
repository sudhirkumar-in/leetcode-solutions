/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = []
    function bt(start, path) {
        res.push([...path])

        // explore
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            bt(i + 1, path);
            path.pop();
        }
    }
    bt(0, [])
    return res
};