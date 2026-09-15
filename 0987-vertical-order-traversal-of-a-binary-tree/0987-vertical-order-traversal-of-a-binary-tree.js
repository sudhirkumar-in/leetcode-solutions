/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    const mapCol = new Map();

    function dfsPreorder(node, row, col) {
        if (!node) return;
        const entry = [row, node.val];
        if (mapCol.has(col)) {
            mapCol.get(col).push(entry);
        } else {
            mapCol.set(col, [entry]);
        }
        if (node.left) dfsPreorder(node.left, row + 1, col - 1);
        if (node.right) dfsPreorder(node.right, row + 1, col + 1);
    }

    dfsPreorder(root, 0, 0);

    const result = [...mapCol.keys()]
        .sort((a, b) => a - b)
        .map(key =>
            mapCol.get(key)
                .sort((a, b) => a[0] - b[0] || a[1] - b[1]) // row first, then value as tiebreak
                .map(pair => pair[1])
        );

    return result;
};