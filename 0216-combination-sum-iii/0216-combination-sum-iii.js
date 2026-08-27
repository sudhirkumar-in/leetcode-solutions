/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const res = [];
    function bt(start, path, sum) {
        // save 
        if (sum == n && path.length == k) {
            res.push([...path]);
            return;
        }
        // prune
        if (sum > n) {
            return
        }

        // explore
        for (let i = start; i <= 9; i++) {
            // choose
            path.push(i);
            // exlore next
            bt(i + 1, path, sum + i);
            // undo
            path.pop();
        }
    }
    bt(1, [], 0)
    return res;
};