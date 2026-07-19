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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let count = 0
    const path = (r, sum) => {
        if (!r) return;
        sum += r.val;
        if (sum == targetSum) {
            count++;
        }
        path(r.left, sum);
        path(r.right, sum)
    }
    const dfs = (r) => {
        if (!r) return;
        path(r, 0);
        dfs(r.left);
        dfs(r.right)
    }
    // call
    dfs(root);
    return count;
};