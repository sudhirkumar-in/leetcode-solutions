function numOfMinutes(n: number, headID: number, parents: number[], informTime: number[]): number {
    let g = Array.from({ length: n }, () => [])

    for (let u = 0; u < n; u++) {
        let p = parents[u]
        if (p === -1) continue
        g[p].push(u)
    }

    let maxTime = 0

    function dfs(u, par, parTime) {
        let uTime = informTime[u] + parTime
        for (let v of g[u]) {
            dfs(v, u, uTime)
        }

        maxTime = Math.max(maxTime, uTime)
    }

    dfs(headID, -1, 0)

    return maxTime
};