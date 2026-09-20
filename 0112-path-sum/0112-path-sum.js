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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    function dfs(node, remaining) {
        // base case
        if (!node) return false;
        // leaf case
        const currRemaining = remaining - node.val
        if (node.left === null && node.right === null) {
            if (currRemaining === 0) {
                return true;
            }
        }
        // recursive case
        return dfs(node.left, currRemaining) || dfs(node.right, currRemaining)
    }
    return dfs(root, targetSum);
};