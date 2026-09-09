function findOrder(n: number, edges: number[][]): number[] {
    let g = Array.from({ length: n }, () => []); // adj list
    let vis = new Array(n).fill(0)
    let inDegree = new Array(n).fill(0)
    let order = []

    for (let [v, u] of edges) {
        g[u].push(v)
        inDegree[v]++
    }

    let q = []
    for (let u = 0; u < n; u++) {
        if (inDegree[u] === 0) {
            q.push(u)
        }
    }

    function bfs() {
        while (q.length) {
            let u = q.shift()
            order.push(u)

            for (let v of g[u]) {
                inDegree[v]--
                if (inDegree[v] === 0) {
                    q.push(v)
                }
            }
        }
    }

    bfs()

    return order.length === n ? order : []
};
