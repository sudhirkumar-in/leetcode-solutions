/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let firstWord = strs[0];
    let count = 0;
    let res = ''
    for (let count = 0; count < firstWord.length; count += 1) {
        let temp = res+firstWord[count]
        if (strs.every(s => s.startsWith(temp))) {
            res += firstWord[count]
        }

    }
    return res;
};