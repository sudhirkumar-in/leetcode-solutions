function commonChars(words: string[]): string[] {
    const n = words.length;
    const res = [];

    let wfs = new Array(n)
    let i = 0

    for (let w of words) {
        wfs[i] = getFreq(w)
        i++
    }

    let firstWordUniqueChars = new Set (words[0])

    for (const ch of firstWordUniqueChars) {
        let minf = Infinity;

        for (let i = 0; i < n; i++) {
            let freq = wfs[i]
            minf = Math.min(minf, freq[ch] ?? 0);
        }

        while (minf--) {
            res.push(ch);
        }
    }

    return res;
};

function getFreq(s) {
    let f = {}

    for (const ch of s) {
        f[ch] = (f[ch] || 0) + 1;
    }

    return f
}
