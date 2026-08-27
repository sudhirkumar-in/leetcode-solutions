/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    const res = []
    function bt(start, path) {
        // save answer
        if (path.length > 1) {
            res.push([...path]);
        }

        // explore
        const seen = new Set() ; // the dublicate values are skipped at the same recursion level
        for (let i = start; i < nums.length; i++) {
            // choose
            if (path.length !== 0 && path.at(-1) > nums[i]) {
                continue;
            }
            if (seen.has(nums[i])) {
                continue;
            }
            // add to seen
            seen.add(nums[i]);
            path.push(nums[i]);
            bt(i + 1, path);
            // undo
            path.pop();
        }

    }
    bt(0, [])
    return res;
};