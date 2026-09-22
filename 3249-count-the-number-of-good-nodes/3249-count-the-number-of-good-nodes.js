/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function (edges) {


    const n = edges.length + 1;
    let g = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    let goodNodeCount = 0

    function dfs(u, par) {
        if (g[u].length === 0) {
            return 1
        }
        let childSize = null
        let thisNodeisFine = true;
        let thisNodeChildSize = 1
        for (let v of g[u]) {
            if (v === par) continue
            let currChildSize = dfs(v, u);
            thisNodeChildSize += currChildSize
            if (childSize !== null) {
                if (childSize != currChildSize) {
                    thisNodeisFine = false;
                }
            } else {
                childSize = currChildSize
            }
        }
        if (thisNodeisFine) {
            goodNodeCount++
        }
        return thisNodeChildSize;
    }

    dfs(0, -1)

    return goodNodeCount
};