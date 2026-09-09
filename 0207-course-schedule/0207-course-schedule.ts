function canFinish(n: number, edges: number[][]): boolean {
    let g = Array.from({ length: n }, () => []); // adj list
    let vis = new Array(n).fill(0)

    for (let [v, u] of edges) {
        g[u].push(v)
    }

    function dfs(u) {
        for (let v of g[u]) {
            if (vis[v] === 1) {
                return false // loop
            }
            if (vis[v] === 2) {
                continue // previously done
            }

            vis[v] = 1 // in progress
            if (!dfs(v)) return false
            vis[v] = 2 // done
        }
        return true
    }

    for (let u = 0; u < n; u++) {
        if (!vis[u]) {
            vis[u] = 1
            if (!dfs(u)) return false
            vis[u] = 2 // done
        }
    }

    return true
};
