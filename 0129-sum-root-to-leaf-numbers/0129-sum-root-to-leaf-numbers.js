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
    const dfs = (r, numStr) => {
        if (!r) {
            return;
        }
        // leaf node
        if (r.left == null && r.right == null) {
            sum += Number(numStr + r.val);
            return;
        }

        // traverse
        dfs(r.left, numStr + r.val);
        dfs(r.right, numStr + r.val);
    }
    dfs(root, '');
    return sum;
};