var uncommonFromSentences = function (s1, s2) {
    let words = [...s1.split(" "), ...s2.split(" ")]
    let o = getFreq(words);
    let res = []

    for (let [e, f] of Object.entries(o)) {
        if (f === 1) {
            res.push(e)
        }
    }

    return res
};

function getFreq(a) {
    let o = {};

    for (let e of a) {
        o[e] = (o[e] ?? 0) + 1;
    }

    return o;
}
