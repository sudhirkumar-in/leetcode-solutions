var numberOfPairs = function (a) {
    let o = getFreq(a);

    let numberOfPairs = 0
    let leftOverCount = 0

    for (let [e, f] of Object.entries(o)) {
        if (f % 2 === 0) {
            numberOfPairs += f / 2
        } else {
            numberOfPairs += (f - 1) / 2
            leftOverCount += 1
        }
    }

    return [numberOfPairs, leftOverCount]
};

function getFreq(a) {
    let o = {};
    for (let e of a) {
        o[e] = (o[e] ?? 0) + 1;
    }
    return o;
}
