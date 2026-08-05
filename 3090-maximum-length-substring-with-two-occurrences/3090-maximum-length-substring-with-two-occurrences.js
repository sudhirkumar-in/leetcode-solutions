/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let n = s.length
    let freq = {}

    let i = 0
    let maxLen = 0
    for (let j = 0; j < n; j++) {
        let e = s[j]
        freq[e] = (freq[e] ?? 0) + 1

        while (i < n && freq[e] > 2) {
            let el = s[i++]
            freq[el] = (freq[el] ?? 0) - 1
        }

        if (i <= j) {
            let len = j - i + 1
            maxLen = Math.max(maxLen, len)
        }
    }

    return maxLen
};