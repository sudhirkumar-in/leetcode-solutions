/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = []
    function bt(start, path) {
        // condition 
        if (path.length == k) {
            res.push([...path])
            return;
        }
        // explore
        for (let i = start; i <= n; i++) {
            path.push(i);
            bt(i + 1, path);
            path.pop();
        }
    }
    bt(1, []);
    return res;

};