var mergeArrays = function (a, b) {
    const sumMap = new Map()

    for (const [k, v] of a)
        sumMap.set(k, (sumMap.get(k) ?? 0) + v)

    for (const [k, v] of b)
        sumMap.set(k, (sumMap.get(k) ?? 0) + v)

    return [...sumMap.entries()]
        .sort((a, b) => a[0] - b[0]) // sort by e
};
