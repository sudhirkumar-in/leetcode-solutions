/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const used = new Array(nums.length).fill(false);
    const len = nums.length;
    function bt(path) {

        // 🎉 If path contains every number
        if (len === path.length) {
            res.push([...path]);
            return;
        }

        // Explore every number
        for (let i = 0; i < nums.length; i++) {

            // 🚫 If already used, skip
            if (used[i] == true) {
                continue;
            }

            // Choose
            path.push(nums[i]);
            used[i] = true;

            // Explore
            bt(path);

            // Undo
            used[i] = false;
            path.pop();
        }
    }

    bt([]);

    return res;
};