const countLargestGroup = function (n) {
    const freq = {}
    let maxFreq = 0

    for (let i = 1; i <= n; i++) {
        let { sumOfDigits } = getSumAndProductOfDigits(i)
        freq[sumOfDigits] = (freq[sumOfDigits] || 0) + 1

        maxFreq = Math.max(maxFreq, freq[sumOfDigits])
    }

    let maxFreqCount = 0
    for (const f of Object.values(freq)) {
        if (f === maxFreq) {
            maxFreqCount++
        }
    }

    return maxFreqCount
}

var getSumAndProductOfDigits = function (n) {
    let sumOfDigits = 0;
    let productOfDigits = 1;

    while (n) {
        let rem = n % 10;
        sumOfDigits += rem;
        productOfDigits *= rem;
        n = Math.trunc(n / 10);
    }

    return { sumOfDigits, productOfDigits };
};
