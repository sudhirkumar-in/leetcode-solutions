function minimumTotal(t: number[][]): number {
    let m = t.length
    if (m === 0) return 0

    for (let i = m - 1; i >= 1; i--) {
        let lastRowMins = []

        let lastRow = t[i]
        let n = lastRow.length
        for (let j = 0; j + 1 < n; j++) {
            lastRowMins.push(Math.min(lastRow[j], lastRow[j + 1]))
        }

        let aboveRow = t[i - 1]
        n = aboveRow.length
        for (let j = 0; j < n; j++) {
            aboveRow[j] += lastRowMins[j]
        }
    }

    return t[0][0]
}

function minimumTotal_topDown(t: number[][]): number {
    let m = t.length
    if (!m) return 0

    let min = Infinity

    function dfs(i, j, sum) {
        if (i + 1 === m) {
            min = Math.min(min, sum)
            return
        }

        dfs(i + 1, j, sum + t[i + 1][j])
        dfs(i + 1, j + 1, sum + t[i + 1][j + 1])
    }

    dfs(0, 0, t[0][0])

    return min
};
