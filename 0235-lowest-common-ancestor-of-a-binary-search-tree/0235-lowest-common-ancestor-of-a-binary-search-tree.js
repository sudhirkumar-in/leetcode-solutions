/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    let ans = null
    function dfs(node, p, q) {
        if (!node) return;
        if (node.val < p.val) {
            dfs(node.right, p, q)
        } else if (node.val > q.val) {
            dfs(node.left, p, q)
        } else {
            ans = node;
            return
        }
    }
    if (p.val < q.val) {
        dfs(root, p, q)
    } else {
        dfs(root, q, p)
    }
    return ans;
};