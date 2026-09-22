function minimumFuelCost(
    edges: number[][], seats: number
): number {
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    let totalLiters = 0

    function dfs(u, par) {
        let size = 1

        for (const v of g[u]) {
            if (v == par) continue;

            let vSize = dfs(v, u);
            size += vSize

            let numOfCars = Math.ceil(vSize / seats)
            let v2ULiters = numOfCars
            totalLiters += v2ULiters
        }

        return size
    }

    dfs(0, -1)

    return totalLiters
};
