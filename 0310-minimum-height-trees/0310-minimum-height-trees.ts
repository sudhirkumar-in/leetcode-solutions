// MHT = Min height tree
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0]

    let g = Array.from({ length: n }, () => [])
    let degree = new Array(n).fill(0)

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
        degree[u]++
        degree[v]++
    }

    let leaves = []
    for (let u = 0; u < n; u++) {
        if (degree[u] === 1) {
            leaves.push(u)
        }
    }

    let res = [];

    while (leaves.length > 0) {
        res = [...leaves]

        let nLeaves = []
        for (let l of leaves) {
            for (let v of g[l]) {
                degree[v]--
                if (degree[v] === 1) {
                    nLeaves.push(v)
                }
            }
        }
        leaves = nLeaves
    }

    return res
};
