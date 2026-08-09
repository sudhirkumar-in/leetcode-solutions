/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const freq = new Map();

    let left = 0;
    let maxFreq = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {

        // 1. Add incoming character
        const ch = s[right];

        // 2. Update maxFreq
        const times = (freq.get(ch) ?? 0) + 1;
        maxFreq = Math.max(maxFreq, times);
        freq.set(ch, times)

        // 3. Shrink while invalid
        // window len - maxfreq > k
        while ((right - left + 1) - maxFreq > k) {
            const leftCh = s[left];
            const leftChTimes = freq.get(leftCh) - 1;
            freq.set(leftCh, leftChTimes);
            maxFreq = Math.max(maxFreq, leftChTimes);
            left++;
        }

        // 4. Update best
        best = Math.max(best, right - left + 1)
    }

    return best;
};