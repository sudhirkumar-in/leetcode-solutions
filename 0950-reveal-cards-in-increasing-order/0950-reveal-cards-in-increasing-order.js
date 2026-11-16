var deckRevealedIncreasing = function (arr) {
    const res = [];
    arr.sort((a, b) => b - a);

    for (const e of arr) {
        if (res.length) {
            res.unshift(res.pop()); // last to first
        }
        res.unshift(e); // add first
    }

    return res;
};
