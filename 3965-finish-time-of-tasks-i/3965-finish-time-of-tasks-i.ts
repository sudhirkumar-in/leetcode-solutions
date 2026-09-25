function finishTime(
    n: number, edges: number[][], baseTime: number[]
): number {
    const g = Array.from({ length: n }, () => [])

    for (const [u, v] of edges) {
        g[u].push(v)
    }

    function dfs(u) {
        if (g[u].length === 0) {
            return baseTime[u] // leaf
        }

        let earliest = Infinity
        let latest = -Infinity

        for (const v of g[u]) {
            const vFinishTime = dfs(v)

            earliest = Math.min(earliest, vFinishTime)
            latest = Math.max(latest, vFinishTime)
        }

        const ownDuration = (latest - earliest) + baseTime[u]

        return latest + ownDuration
    }

    return dfs(0)
}
