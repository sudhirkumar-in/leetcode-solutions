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
    function dfs(node) {
        if (node === null) {
            return 0;
        }
        const left = dfs(node.left)
        const right = dfs(node.right)
        let self = 0;
        if (node.val == p.val || node.val === q.val) {
            self = 1;
        }
        const result = left + right + self
        if (result == 2 && ans === null) {
            ans = node
        }
        return result;
    }
    dfs(root);
    return ans;
};