/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []
    function bt(path, open, close) {
        if (path.length === n * 2) {
            res.push(path);
            return
        }
        // explore
        if (open < n) {
            bt(path + '(', open + 1, close);
        }
        if (close < open) {
            bt(path + ')', open, close + 1);
        }

    }
    bt('', 0, 0);
    return res;
};