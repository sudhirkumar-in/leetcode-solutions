
function averageOfSubtree(root: TreeNode | null): number {
    let res = 0

    function dfs(n) {
        if (!n) return [0, 0]; // [sum, ct]

        let [lRes, lCt] = dfs(n.left)
        let [rRes, rCt] = dfs(n.right)

        let sum = lRes + rRes + n.val
        let ct = lCt + rCt + 1

        let av = Math.trunc(sum / ct)
        if (av === n.val) {
            res++
        }

        return [sum, ct]
    }

    dfs(root);

    return res;
}
