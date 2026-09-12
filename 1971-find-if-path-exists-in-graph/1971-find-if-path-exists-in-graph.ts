function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    function buildGraph(ed) {
        const g = Array.from({ length: n }, () => []);
        for (const [u, v] of ed) {
            g[u].push(v)
            g[v].push(u)
        }
        return g;
    }

    const graph = buildGraph(edges); // adj list
    // console.log(graph)
    let found = false;
    const vis = new Array(n).fill(false);
    function dfs(u) {
        vis[u] = true;
        if (u === destination) {
            found = true;
            return;
        }
        for (const nbr of graph[u]) {
            if (!vis[nbr]) {
                dfs(nbr);
            }
        }
    }
    dfs(source)
    return found;
};