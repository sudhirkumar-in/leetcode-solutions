var mergeSimilarItems = function (valWeights1, valWeights2) {
    let map = new Map();

    for (let [v, w] of valWeights1) {
        map.set(v, (map.get(v) ?? 0) + w);
    }

    for (let [v, w] of valWeights2) {
        map.set(v, (map.get(v) ?? 0) + w);
    }

    return [...map.entries()]
        .sort((a, b) => a[0] - b[0]);
};
