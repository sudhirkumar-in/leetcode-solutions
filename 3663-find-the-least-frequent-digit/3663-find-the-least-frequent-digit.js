var getLeastFrequentDigit = function (n) {
    let s = n + ''

    let freq = {}
    for (let e of s) {
        freq[e] = (freq[e] ?? 0) + 1
    }

    let minFreq = Infinity
    let minFreqDigit;

    for (let [digit, f] of Object.entries(freq)) {
        digit = +digit

        if (f < minFreq) {
            minFreq = f
            minFreqDigit = digit
        } else if (f === minFreq) {
            minFreqDigit = Math.min(minFreqDigit, digit)
        }
    }

    return minFreqDigit
};
