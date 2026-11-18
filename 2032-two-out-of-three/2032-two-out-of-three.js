var twoOutOfThree = function (a, b, c) {
    let set1 = new Set(a)
    let set2 = new Set(b)
    let set3 = new Set(c)

    let res = new Set()

    oneInTwoOrThree(set1, set2, set3, res)
    oneInTwoOrThree(set2, set3, set1, res)
    oneInTwoOrThree(set3, set1, set2, res)

    return [...res]
};

function oneInTwoOrThree(set1, set2, set3, res) {
    for (let e of set1)
        if (set2.has(e) || set3.has(e))
            res.add(e)
    return res
}
