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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    function dfs(node) {
        if (!node) return null;

        [node.left, node.right] = [node.right, node.left];
        
        dfs(node.left);
        dfs(node.right);
        return node;

    }
    return dfs(root);
};