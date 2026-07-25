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
var findTilt = function (root) {
    let result = 0;
    const dfs = (node) => {
        if (!node) return 0;
        let sumL = dfs(node.left);
        let sumR = dfs(node.right);
        result += Math.abs(sumL - sumR);
        return node.val + sumL + sumR
    }
    dfs(root);
    return result;
};