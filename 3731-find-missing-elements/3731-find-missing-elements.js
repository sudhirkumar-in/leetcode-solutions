var findMissingElements = function (a) {
    let min = Math.min(...a)
    let max = Math.max(...a)
    let set = new Set(a)
    let res = []

    for (let x = min; x <= max; x++) {
        if (!set.has(x)) {
            res.push(x)
        }
    }

    return res.sort((a, b) => a - b)
};
