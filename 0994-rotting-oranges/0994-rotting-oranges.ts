function orangesRotting(g: number[][]): number {
    let m = g.length
    let n = g[0].length
    let q = []
    let haveOnes = false

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

            if (g[i][j] === 2) {
                q.push([i, j])
            } else if (g[i][j] === 1) {
                haveOnes = true
            }
        }
    }

    if (haveOnes === false) {
        return 0
    }

    let dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]

    let levels = 0

    while (q.length) {
        levels++
        let count = q.length

        for (let k = 0; k < count; k++) {
            let [i, j] = q.shift()

            for (let [dx, dy] of dirs) {
                let [ni, nj] = [i + dx, j + dy]

                if (
                    ni >= 0 && ni < m &&//
                    nj >= 0 && nj < n
                ) {

                    if (g[ni][nj] === 1) {
                        g[ni][nj] = 2;
                        q.push([ni, nj]);
                    }
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

            if (g[i][j] === 1) {
                return -1
            }
        }
    }

    return levels - 1
};
