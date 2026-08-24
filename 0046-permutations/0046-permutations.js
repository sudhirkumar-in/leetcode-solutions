/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let n = nums.length
    let res = []

    function bt(path) {
        if (path.size === n) {
            res.push([...path].map(i => nums[i]))
            return
        }

        for (let i = 0; i < n; i++) {
            if (path.has(i)) continue
            path.add(i)
            bt(path)
            path.delete(i)
        }
    }

    bt(new Set())

    return res
};