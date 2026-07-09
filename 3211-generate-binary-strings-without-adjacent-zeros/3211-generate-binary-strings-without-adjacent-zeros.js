/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    let validStr = []
    const dfs = (str) => {
        if (str.length == n) {
            validStr.push(str);
            return; // break , base case
        }
        // do &  recurse
        if (str.at(-1) === '0') {
            dfs(str + '1');
        } else {
            dfs(str + '1')
            dfs(str + '0')
        }
    }
    dfs('0');
    dfs('1');
    return validStr;
};