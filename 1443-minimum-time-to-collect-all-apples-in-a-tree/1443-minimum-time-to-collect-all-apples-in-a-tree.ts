function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    let g = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    let appleCount = 0
    let time = 0
    let res = new Array(n).fill(0)

    function dfs(u, par) {
        if (hasApple[u]) appleCount++

        if (g[u].length === 0) {
            return
        }

        for (let v of g[u]) {
            if (v === par) continue

            let prevTime = time
            time++
            let prevAppleCount = appleCount

            dfs(v, u)

            if (appleCount === prevAppleCount) {
                time = prevTime
            } else {
                time++
            }
        }

    }

    dfs(0, -1)

    return time
};
