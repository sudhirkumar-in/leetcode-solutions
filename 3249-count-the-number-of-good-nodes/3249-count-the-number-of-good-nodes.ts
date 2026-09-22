function countGoodNodes(edges: number[][]): number {
    const n = edges.length + 1;
    let g = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    let goodNodeCount = 0

    function dfs(u, par) {
        let uSubTreeCount = 1
        let childSizes = new Set()

        for (let v of g[u]) {
            if (v === par) continue

            let vSubTreeCount = dfs(v, u);

            uSubTreeCount += vSubTreeCount
            if (childSizes.size <= 1) {
                childSizes.add(vSubTreeCount)
            }
        }

        if (childSizes.size <= 1) {
            goodNodeCount++
        }
        return uSubTreeCount;
    }

    dfs(0, -1)

    return goodNodeCount
};