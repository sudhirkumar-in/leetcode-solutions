/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const res = []
    nums.sort((a, b) => a - b);
    function bt(start, path) {
        res.push([...path]);
        // explore
        for (let i = start; i < nums.length; i++) {
            // avoid dublicate
            if (i > start && nums[i - 1] === nums[i]) {
                continue;
            }
            //choose
            path.push(nums[i]);
            // explore next
            bt(i + 1, path);
            // undo
            path.pop();
        }
    }
    bt(0, [])
    return res;
};