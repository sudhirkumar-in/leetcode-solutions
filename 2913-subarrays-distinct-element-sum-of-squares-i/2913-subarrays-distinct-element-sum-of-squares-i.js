var sumCounts = function (a) {
    let n = a.length
    let res = 0

    for (let L = 0; L < n; L++) {
        for (let R = L; R < n; R++) {
            let set = new Set()

            for (let i = L; i <= R; i++) {
                set.add(a[i])
            }

            res += (set.size) ** 2
        }
    }

    return res
};
