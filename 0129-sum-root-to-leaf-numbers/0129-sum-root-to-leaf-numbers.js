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
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0;
    const dfs = (node, current) => {
        if (!node) return;

        current = current * 10 + node.val;
        // leaf node
        if (node.left == null && node.right == null) {
            sum += current;
            return;
        }

        // traverse
        dfs(node.left, current);
        dfs(node.right, current);
    }
    dfs(root, 0);
    return sum;
};