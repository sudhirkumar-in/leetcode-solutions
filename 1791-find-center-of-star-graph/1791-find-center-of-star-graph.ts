function findCenter(edges: number[][]): number {
    const set = new Set();
    for (const [u, v] of edges) {
        set.add(u);
        set.add(v);
    }
    const n = set.size;
    // console.log(n);
    const g = Array.from({ length: n + 1 }, () => []);
    let maxLen = 0
    const size = {}
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
        const uSize = g[u].length;
        const vSize = g[v].length;
        size[uSize] = u;
        size[vSize] = v
        maxLen = Math.max(maxLen, uSize, vSize)
    }
return size[maxLen]
    // for (let node = 0; node < n + 1; node++) {
    //     if (g[node].length === maxLen) {
    //         return node
    //     }
    // }

};