const slope = ([x1, y1], [x2, y2]) => {
    let s = (y2 - y1) / (x2 - x1)
    if (s === -Infinity) {
        s = Infinity
    }
    return s
}

function checkStraightLine(aa: number[][]): boolean {
    let [x1, y1] = aa[0]
    aa.shift()

    let set = new Set()

    for (let [x2, y2] of aa) {
        let s = slope([x1, y1], [x2, y2])
        set.add(s)
    }

    return set.size === 1
};
