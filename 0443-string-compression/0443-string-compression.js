/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let res = '';
    let count = 1
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == chars[i + 1]) {
            count++;
        } else {
            res += chars[i] + (count === 1 ? '' : count);
            // reset count 
            count = 1;
        }
    }
    chars.length = res.length;
    for (let i = 0; i < res.length; i++) {
        chars[i] = res[i]
    }

    return chars.length
};