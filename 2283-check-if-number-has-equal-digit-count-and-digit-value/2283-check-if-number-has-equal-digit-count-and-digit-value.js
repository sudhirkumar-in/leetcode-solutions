var digitCount = function (s) {
    let freq = {};

    for (let d of s) {
        freq[d] = (freq[d] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        let d = i
        let expectedFreq = +s[i]
        let actualFreq = freq[d] ?? 0;

        if (actualFreq !== expectedFreq) {
            return false;
        }
    }

    return true;
};
