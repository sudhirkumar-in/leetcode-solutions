/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    // helper
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    const isVowel = (ch) => vowelSet.has(ch)
    // build window
    let vowelCount = 0
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            vowelCount++;
        }
    }
    let best = vowelCount;
    const n = s.length;
    for (let i = k; i < n; i++) {
        // outgoing
        if (isVowel(s[i - k])) {
            vowelCount -= 1
        }
        // incoming
        if (isVowel(s[i])) {
            vowelCount += 1
        }

        // update 
        best = Math.max(best, vowelCount);
    }
    return best;
};