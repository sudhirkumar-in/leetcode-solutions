var countSubTrees = function (n, edges, labels) {
    const chIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0)
    let g = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    // let vis = new Array(n).fill(0)
    let res = new Array(n).fill(0)

    function dfs(u, par) {
        // if (vis[u]) return new Array(26).fill(0)
        // vis[u] = 1

        let ich = chIndex(labels[u])

        if (g[u].length === 0) {
            res[u] = 1
            let freq = new Array(26).fill(0)
            freq[ich] = 1
            return freq
        }

        let freq = new Array(26).fill(0)
        freq[ich] = 1
        for (let v of g[u]) {
            if (v === par) continue
            // if (vis[v]) continue
            let freq_ = dfs(v, u)
            for (let i = 0; i < 26; i++) {
                freq[i] += freq_[i]
            }
        }

        res[u] = freq[ich]
        return freq
    }

    dfs(0, -1)

    return res
};
