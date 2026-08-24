/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
        let n = nums.length
    let res = []

    function bt(currentBranchSet) {
        if (currentBranchSet.size === n) {
            res.push([...currentBranchSet].map(i => nums[i]))
            return
        }

        let thisLevelSet = new Set()
        for (let i = 0; i < n; i++) {
            if (thisLevelSet.has(nums[i])) continue
            thisLevelSet.add(nums[i])

            if (currentBranchSet.has(i)) continue
            currentBranchSet.add(i)

            bt(currentBranchSet)

            currentBranchSet.delete(i)
            thisLevelSet.delete(nums[i]) // <----------
        }
    }

    bt(new Set())

    return res
};