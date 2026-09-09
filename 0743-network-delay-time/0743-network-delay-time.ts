function networkDelayTime(edges: number[][], n: number, source: number): number {
    let g = Array.from({ length: n }, () => []); // adj list
    let vis = new Array(n).fill(0)
    let prev = new Array(n).fill(-1)

    for (let [u, v, w] of edges) {
        u--
        v--
        g[u].push([v, w])
    }

    source--

    let dist = new Array(n).fill(Infinity) // min distance from source to each
    dist[source] = 0

    let pq = new PriorityQueue<number>((u, v) => dist[u] - dist[v])
    pq.enqueue(source)

    while (pq.size()) {
        let u = pq.dequeue()

        for (let [v, w] of g[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w
                prev[v] = u
                pq.enqueue(v)
            }
        }
    }

    let maxDist = Math.max(...dist)
    if (maxDist === Infinity) return -1

    // dist, prev
    return maxDist
}
