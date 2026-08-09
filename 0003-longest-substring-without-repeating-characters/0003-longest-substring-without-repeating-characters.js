/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();

    let left = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {

        // 1. Shrink while incoming character already exists
        while (set.has(s[right])) {
            const leftCh = s[left];
            set.delete(leftCh)
            left++
        }

        // 2. Add incoming character
        set.add(s[right]);

        // 3. Update best
        best = Math.max(best, right - left + 1)

    }

    return best;
};