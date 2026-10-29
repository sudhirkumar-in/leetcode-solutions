/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {

    const m = {}
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch in m) {
            m[ch].push(i)
        } else {
            m[ch] = [i];
        }
    }

    let res = Object.values(m).filter(v => v.length > 1).map(v => v.at(-1) - v[0] - 1);
    if (res.length === 0) return -1

    return Math.max(...res)
};