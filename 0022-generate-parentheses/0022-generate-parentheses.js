/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const pair = [];
    let len = n * 2;
    const dfs = (str, leftParen, rightParen) => {
        if (str.length === len) {
            if (leftParen === n && rightParen === n) {
                pair.push(str);
            }
            return; // base 
        }
        if (rightParen < n) {
            dfs(str + '(', leftParen + 1, rightParen)
        }
        if (rightParen < leftParen) {
            dfs(str + ')', leftParen, rightParen + 1)
        }
    }
    dfs('', 0, 0)
    return pair;
};