function findCenter(edges: number[][]): number {
    const set = new Set();
    for (const [u, v] of edges) {
        set.add(u);
        set.add(v);
    }
    const n = set.size;
    // console.log(n);
    const g = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }
    let maxLen = Math.max(...g.map(v => v.length));
    // console.log(maxLen)
    // console.table(g);
    for (let node = 0; node < n + 1; node++) {
        if (g[node].length === maxLen) {
            return node
        }
    }
  
};