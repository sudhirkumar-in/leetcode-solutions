function countHighestScoreNodes(parents: number[]): number {
    let n = parents.length
    let g = Array.from({ length: n }, () => [])

    for (let u = 0; u < n; u++) {
        let p = parents[u]
        if (p === -1) continue
        g[p].push(u)
    }

    let maxS = 0
    let treeScoreObj = {}

    function dfs(u, par) {
        let treeSize = 1
        let treeScore = 1
        for (let v of g[u]) {
            let size_ = dfs(v, u)
            treeSize += size_
            treeScore *= size_
        }

        let remainingTreeSize = n - treeSize
        if (remainingTreeSize > 0) {
            treeScore *= remainingTreeSize
        }

        treeScoreObj[treeScore] = (treeScoreObj[treeScore] ?? 0) + 1
        maxS = Math.max(maxS, treeScore)

        return treeSize
    }

    dfs(0, -1)

    return treeScoreObj[maxS]
};
