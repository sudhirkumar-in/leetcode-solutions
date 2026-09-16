function findOrder(n: number, edges: number[][]): number[] {
    let g = Array.from({ length: n }, () => [])
    let inDeg = new Array(n).fill(0)

    for (let [v, u] of edges) {
        inDeg[v]++
        g[u].push(v)
    }

    let q = []
    for (let u = 0; u < n; u++) {
        if (inDeg[u] === 0) {
            q.push(u)
        }
    }

    let torder = []
    while (q.length) {
        let u = q.shift()
        torder.push(u)

        for (let v of g[u]) {
            inDeg[v]--
            if (inDeg[v] === 0) {
                q.push(v)
            }
        }
    }

    if (torder.length === n) {
        return torder
    } else {
        return []
    }
};
