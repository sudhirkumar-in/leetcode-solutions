/**
 * @param {number} n
 * @param {number} k
 * @return {string[]}
 */
var generateValidStrings = function (n, k) {
    const res = []
    const dfs = (str, len, sum) => {

        if (len == n) {
            console.log(str)
            if (sum <= k) {

                res.push(str);
            }
            return;
        }


        if (str.at(-1) == '1') {
            dfs(str + '0', len + 1, sum + 0);
        } else {
            dfs(str + '0', len + 1, sum + 0);
            dfs(str + '1', len + 1, sum + len);
        }

    }
    dfs('', 0, 0)
    return res
};