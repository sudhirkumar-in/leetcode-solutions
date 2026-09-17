/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    const vis = new Array(n);
    const g = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    let nodeCount = 0;
    let edgeCount = 0; // will hold sum of degrees (each edge counted twice)

    function dfs(i) {
        if (vis[i]) return;
        vis[i] = true;
        nodeCount++;
        edgeCount += g[i].length; // degree of this node

        for (let node of g[i]) {
            dfs(node);
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!vis[i]) {
            nodeCount = 0;
            edgeCount = 0;
            dfs(i);

            const actualEdges = edgeCount / 2; // undirected: each edge counted from both ends
            const m = nodeCount;
            if (actualEdges === (m * (m - 1)) / 2) {
                count++;
            }
        }
    }

    return count;
};