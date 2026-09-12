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
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
        maxLen = Math.max(maxLen,g[u].length,g[v].length)
    }
   
    for (let node = 0; node < n + 1; node++) {
        if (g[node].length === maxLen) {
            return node
        }
    }
  
};