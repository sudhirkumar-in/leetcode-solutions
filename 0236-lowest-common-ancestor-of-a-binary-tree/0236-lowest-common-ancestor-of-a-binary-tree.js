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

    function dfs(node) {
        if (!node) return null;

        if (node.val === p.val || node.val === q.val) {
            return node;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        // What should happen if left && right?
        if (left && right) {
            return node
        }
        // What should happen if only left exists?

        if (left) {
            return left;
        }

        // What should happen if only right exists?
        if (right) {
            return right;
        }

        return null;
    }

    return dfs(root);
};
