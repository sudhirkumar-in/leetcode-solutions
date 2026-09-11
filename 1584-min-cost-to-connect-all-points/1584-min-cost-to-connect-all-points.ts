function minCostConnectPoints(points: number[][]): number {
    // return mstPrims(points)
    return mstKruskal(points)
};

const distanceManhattan = (
    [x1, y1]: [number, number],
    [x2, y2]: [number, number]
) => Math.abs(x2 - x1) + Math.abs(y2 - y1)

function mstPrims(points: number[][]): number {
    let n = points.length
    let vis = new Array(n).fill(false)
    let dist = new Array(n).fill(Infinity)
    let pq = new PriorityQueue<[number, number]>((a, b) => a[0] - b[0])
    let res = 0

    pq.enqueue([0, 0])
    dist[0] = 0

    while (!pq.isEmpty()) {
        let [d, u] = pq.dequeue()

        if (vis[u]) continue
        vis[u] = true

        res += d

        for (let v = 0; v < n; v++) {
            if (vis[v]) continue

            let d2 = distanceManhattan(
                points[u] as [number, number],
                points[v] as [number, number]
            )

            if (d2 < dist[v]) {
                dist[v] = d2
                pq.enqueue([d2, v])
            }
        }
    }

    return res
}

function mstKruskal(points: number[][]): number {
    let n = points.length
    let uf = new DSU(n)
    let pq = new PriorityQueue<[number, number, number]>((a, b) => a[0] - b[0])

    for (let u = 0; u < n; u++) {
        for (let v = u + 1; v < n; v++) {
            let d2 = distanceManhattan(
                points[u] as [number, number],
                points[v] as [number, number]
            )
            pq.enqueue([d2, u, v])
        }
    }

    let res = 0

    while (!pq.isEmpty()) {
        let [d, u, v] = pq.dequeue()
        if (!uf.union(u, v)) continue // loop

        res += d
    }

    return res
}

class DSU {
    parent = []
    size = []

    constructor(n) {
        for (let i = 0; i < n; i++) {
            this.parent[i] = i
            this.size[i] = 1
        }
    }

    find(i) {
        // let { parent, size } = this
        if (this.parent[i] === i) return i

        let r = this.find(this.parent[i])
        this.parent[i] = r // path compresssion
        return r
    }

    union(i, j) {
        // let { parent, size } = this

        let ri = this.find(i)
        let rj = this.find(j)

        if (ri === rj) return false

        if (this.size[ri] < this.size[rj]) {
            [rj, ri] = [ri, rj]
        }

        // ri >= rj
        this.parent[rj] = ri
        this.size[ri] += this.size[rj]
        // size[rj] = 1 // future find will make it 1

        return true
    }
}
