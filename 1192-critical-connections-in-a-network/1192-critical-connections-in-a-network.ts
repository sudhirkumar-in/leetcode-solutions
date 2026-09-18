function criticalConnections(n: number, edges: number[][]): number[][] {
    let bridges = tarjan(n, edges);
    return bridges
}

function tarjan(n, edges) {
    let g = Array.from({ length: n }, () => [])

    for (let [v, u] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    let discTime = new Array(n).fill(-1)
    let lowDiscTime = new Array(n).fill(-1)
    let bridges = []
    let time = 0

    function dfs(u, par) {
        discTime[u] = lowDiscTime[u] = time
        time++

        for (let v of g[u]) {
            if (v === par) continue

            if (discTime[v] === -1) {
                dfs(v, u)

                lowDiscTime[u] = Math.min(lowDiscTime[u], lowDiscTime[v])

                if (discTime[u] < lowDiscTime[v]) {
                    bridges.push([u, v])
                }

            } else {
                lowDiscTime[u] = Math.min(lowDiscTime[u], discTime[v])
            }

        }
    }

    dfs(0, -1)

    return bridges
}		
