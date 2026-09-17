/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    // create a graph , adj list
    const g = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of times) {
        g[u].push([v, w]);
    }
    // console.log(g);
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
    const pq = new MinPriorityQueue((item) => item[1]);
    pq.enqueue([k, 0]);
    while (pq.size()) {
        const [node, w] = pq.dequeue();
        if (w > dist[node]) continue;
        for (const [v, cw] of g[node]) {
            if (w + cw < dist[v]) {
                dist[v] = w + cw;
                pq.enqueue([v, w + cw])
            }
        }
    }
    // console.log(dist)
    // console.log(dist)
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        ans = Math.max(ans, dist[i]);
    }
    return ans;

};