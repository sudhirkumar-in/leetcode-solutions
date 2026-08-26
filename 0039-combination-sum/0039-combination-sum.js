/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = []
    function bt(start, path, sum) {
        // done
        if (sum === target) {
            // save
            res.push([...path]);
            return;
        }
        if (sum > target) {
            // prune
            return;
        }

        //explore
        for (let i = start; i < candidates.length; i++) {
            sum += candidates[i]
            path.push(candidates[i])

            bt(i, path, sum);

            sum -= candidates[i]
            path.pop()
        }

    }
    bt(0, [], 0);
    return res
};