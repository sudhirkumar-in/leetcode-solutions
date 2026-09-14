function validateBinaryTreeNodes(
    n: number, leftChild: number[], rightChild: number[]
): boolean {
    let map = new Map()
    let outDegree = new Array(n).fill(0)
    let indDegree = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        let left = null
        if (leftChild[i] !== -1) {
            let iLeft = leftChild[i]
            if (map.has(iLeft)) {
                left = map.get(iLeft)
            } else {
                left = new TreeNode(iLeft)
                map.set(iLeft, left)
            }
            outDegree[i]++
            indDegree[iLeft]++
        }

        let right = null
        if (rightChild[i] !== -1) {
            let iRight = rightChild[i]
            if (map.has(iRight)) {
                right = map.get(iRight)
            } else {
                right = new TreeNode(iRight)
                map.set(iRight, right)
            }
            outDegree[i]++
            indDegree[iRight]++
        }

        if (map.has(i)) {
            let node = map.get(i)
            node.left = left
            node.right = right
        } else {
            map.set(i, new TreeNode(i, left, right))
        }
    }

    let rootCount = 0
    let root = null
    for (let i = 0; i < n; i++) {
        if (indDegree[i] === 0) {
            rootCount++
            root = map.get(i)
        }
        if (indDegree[i] > 1) return false
        if (outDegree[i] > 2) return false
    }

    if (rootCount !== 1) return false

    // no cycle
    let vis = new Set()
    let gvis = new Set()
    function dfs(n) {
        if (!n) return true
        if (vis.has(n)) return false

        gvis.add(n)
        vis.add(n)
        if (!dfs(n.left)) return false
        if (!dfs(n.right)) return false
        vis.delete(n)

        return true
    }

    return dfs(root) && (gvis.size === n)
};
