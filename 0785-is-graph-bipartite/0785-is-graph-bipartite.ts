function isBipartite(g: number[][]): boolean {
    let n = g.length // adjacency list
    let vis = new Array(n).fill(-1)

    function dfs(u) {
        for (let v of g[u]) {
            if (vis[v] === -1) {
                vis[v] = 1 - vis[u]
                if (!dfs(v)) return false
            } else {
                if (vis[u] === vis[v]) {
                    return false
                }
            }
        }
        return true
    }

    for (let u = 0; u < n; u++) {
        if (vis[u] === -1) {
            vis[u] = 0
            if (!dfs(u)) return false
        }
    }

    return true
}
