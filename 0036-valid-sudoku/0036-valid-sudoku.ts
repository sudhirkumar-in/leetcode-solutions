// let cl = console.log
// let ct = console.table

function isValidSudoku(g: string[][]): boolean {
    let m = 9
    let n = 9

    let rowSets = Array.from({ length: m }, () => new Map())
    let colSets = Array.from({ length: n }, () => new Map())
    let blockSets = // 3x3
        Array.from({ length: 3 }, () =>
            Array.from({ length: 3 }, () => new Map())
        )

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let e = g[i][j]
            if (e === '.') continue

            rowSets[i].set(e, (rowSets[i].get(e) ?? 0) + 1)
            colSets[j].set(e, (colSets[j].get(e) ?? 0) + 1)

            let [k, l] = [i / 3, j / 3]
            k = Math.trunc(k)
            l = Math.trunc(l)

            blockSets[k][l].set(e, (blockSets[k][l].get(e) ?? 0) + 1)
        }
    }

    // cl({ rowSets })
    // cl({ colSets })
    // ct(blockSets)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let e = g[i][j]
            if (e === '.') continue

            let [k, l] = [i / 3, j / 3]
            k = Math.trunc(k)
            l = Math.trunc(l)

            if (
                rowSets[i].get(e) > 1 ||
                colSets[j].get(e) > 1 ||
                blockSets[k][l].get(e) > 1
            ) return false
        }
    }

    return true
};
