/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    function dfs(pn, qn) {
        if (!pn && !qn) return true;
        if (!pn || !qn) return false;


        return pn.val === qn.val && dfs(pn.left, qn.left) && dfs(pn.right, qn.right)
    }
    return dfs(p, q);
};