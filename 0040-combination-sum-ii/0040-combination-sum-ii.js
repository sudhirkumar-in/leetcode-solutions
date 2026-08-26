/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = []
    function bt(start, sum, path) {
        // answer
        if (sum === target) {
            res.push([...path])
            return;
        }
        //prune
        if (sum > target) {
            return;
        }

        // explore
        for (let i = start; i < candidates.length; i++) {
            // Skip duplicate siblings
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            sum += candidates[i]
            path.push(candidates[i])

            bt(i + 1, sum, path)

            sum -= candidates[i]
            path.pop()
        }
    }
    bt(0, 0, [])
    return res
};