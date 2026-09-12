function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    function buildGraph(ed) {
        const g = []
        for (const [u, v] of ed) {
            if (u in g) {
                g[u].push(v)
            } else {
                g[u] = [v]
            }
            //

            if (v in g) {
                g[v].push(u)
            } else {
                g[v] = [u]
            }
        }
        return g;
    }
    if (edges.length === 0) return true; // case
    const graph = buildGraph(edges); // adj list
    // console.log(graph)
    let found = false;
    const vis = new Array(graph.length).fill(false);
    function dfs(u) {
        vis[u] = true;
        if (u === destination) {
            found = true;
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