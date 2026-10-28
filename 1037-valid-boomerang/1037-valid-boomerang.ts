const slope = ([x1, y1], [x2, y2]) => {
    let n = y2 - y1
    let d = x2 - x1

    let s = n / d
    if (d === 0) {
        s = Infinity
    }

    // let cl = console.log
    // cl({ x1, y1, x2, y2, n, d, s })
    return s
}

const areAllPointsUnique = (aa) => {
    let allLen = aa.length
    let uniqueLen = new Set(aa.map(([x, y]) => x + ',' + y)).size
    return allLen === uniqueLen
}

function isBoomerang(aa: number[][]): boolean {
    if (!areAllPointsUnique(aa)) return false

    let [x1, y1] = aa[0]
    aa.shift()

    let set = new Set()

    for (let [x2, y2] of aa) {
        let s = slope([x1, y1], [x2, y2])
        set.add(s)
    }

    return set.size !== 1
};
