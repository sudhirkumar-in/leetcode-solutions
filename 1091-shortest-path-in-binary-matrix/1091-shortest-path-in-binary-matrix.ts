function shortestPathBinaryMatrix(g: number[][]): number {
    let m = g.length
    let n = g[0].length

    // let pq = new PriorityQueue<[number, number, number]>(
    //     (a, b) => a[2] - b[2] || b[0] - a[0] || b[1] - a[1]
    // )
    let q = []
    let vis = Array.from({ length: m }, () => new Array(n).fill(0))

    let dirs = [
        [1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [-1, -1],
        [-1, 0],
        [-1, 1],
    ]

    if (g[0][0] !== 0) return -1

    let mind = Infinity

    // pq.enqueue([0, 0, 1])
    q.push([0, 0, 1])

    // while (!pq.isEmpty()) {
    while (q.length) {
        // let [i, j, d] = pq.dequeue()
        let [i, j, d] = q.shift()

        if (vis[i][j]) continue
        vis[i][j] = 1

        if (d > mind) continue

        if (i === m - 1 && j === n - 1) {
            mind = Math.min(mind, d)
            break
        }

        for (let [dx, dy] of dirs) {
            let [ni, nj, nd] = [i + dx, j + dy, d + 1]

            if (
                ni >= 0 && ni < m && nj >= 0 && nj < n &&
                g[ni][nj] === 0
            ) {
                q.push([ni, nj, nd])
                // pq.enqueue([ni, nj, nd])
            }
        }
    }

    if (mind === Infinity) {
        return -1
    }

    return mind
};
