var countSpecialIntegers = function(a) {
    let indexMap = {}
    let i = -1

    for (let e of a) {
        i++
        indexMap[e] = indexMap[e] ?? []
        indexMap[e].push(i)
    }

    let ct = 0

    for (let [e, indArr] of Object.entries(indexMap)) {
        if (indArr.length === 3) {
            let [i, j, k] = indArr
            if ((j - i) === (k - j)) {
                ct++
            }
        }
    }

    return ct
};
