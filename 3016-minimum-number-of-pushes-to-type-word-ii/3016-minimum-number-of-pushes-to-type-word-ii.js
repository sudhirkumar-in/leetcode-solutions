var minimumPushes = function (s) {
    const n = s.length;
    const freq = {};

    for (const e of s) {
        freq[e] = (freq[e] || 0) + 1;
    }

    const timesToType = Object.values(freq)
    timesToType.sort((a, b) => b - a);

    let j = 0;
    let sum = 0;

    for (let pos = 1; pos <= n && j < timesToType.length; pos++) {
        for (let maxKeysCanBeTyped = 8;
            j < timesToType.length && maxKeysCanBeTyped > 0;
            maxKeysCanBeTyped--) {
            sum += pos * timesToType[j++];
        }
    }

    return sum;
};
