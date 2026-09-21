function reachableNodes(n: number, edges: number[][], restricted: number[]): number {
    let restrictedSet = new Set(restricted)
    let g = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    let goodNodeCount = 0

    function dfs(u, par) {
        if (restrictedSet.has(u)) {
            return
        }

        goodNodeCount++

        // if (g[u].length === 0) {
        //     return
        // }

        for (let v of g[u]) {
            if (v === par) continue
            dfs(v, u)
        }
    }

    dfs(0, -1)

    return goodNodeCount
};
