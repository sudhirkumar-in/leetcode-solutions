/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let left = 0;
    let best = 0;
    const freq = new Map()
    for (let right = 0; right < s.length; right++) {
        // incoming
        const ch = s[right];
        freq.set(ch, (freq.get(ch) ?? 0) + 1)
        while (freq.get(ch) > 2) {
            const leftCh = s[left]
            const count = freq.get(leftCh) - 1

            freq.set(leftCh, count);
            left++
        }

        best = Math.max(best, right - left + 1);
    }
    return best;
};