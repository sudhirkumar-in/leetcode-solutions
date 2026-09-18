// let cl = console.log
var longestCycle = function (edges) {
    let n = edges.length
    let component = kosaraju(n, edges);
    // cl({ n })
    // cl({ edges })
    // cl({ component })

    let o = {}
    for (let e of component) {
        o[e] = (o[e] ?? 0) + 1
    }
    let max = Math.max(...Object.values(o) as number[])
    if (max === 1) return -1
    return max
};

function kosaraju(n, edges) {
    const g = Array.from({ length: n }, () => []);
    const gRev = Array.from({ length: n }, () => []);

    // for (const [u, v] of edges) {
    //     g[u].push(v);
    //     gRev[v].push(u);
    // }

    for (let u = 0; u < n; u++) {
        let v = edges[u]
        if (v === -1) continue
        g[u].push(v);
        gRev[v].push(u);
    }

    const g_vis = new Array(n).fill(false);
    const postOrder = [];

    function dfsGetOrder(u) {
        g_vis[u] = true;
        for (const v of g[u]) {
            if (!g_vis[v]) {
                dfsGetOrder(v);
            }
        }
        postOrder.push(u);
    }

    for (let u = 0; u < n; u++) {
        if (!g_vis[u]) {
            dfsGetOrder(u);
        }
    }

    const component = new Array(n).fill(-1);

    function dfsGetComponent(u, id) {
        component[u] = id;
        for (const v of gRev[u]) {
            if (component[v] === -1) {
                dfsGetComponent(v, id);
            }
        }
    }

    let id = 0;
    postOrder.reverse()

    for (let u of postOrder) {
        if (component[u] === -1) {
            dfsGetComponent(u, id++);
        }
    }

    return component;
}
