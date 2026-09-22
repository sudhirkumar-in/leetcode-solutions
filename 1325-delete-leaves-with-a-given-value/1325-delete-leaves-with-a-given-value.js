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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    function dfs(node) {
        if (!node) return null;

        node.left = dfs(node.left);    // whatever dfs decides left should be, assign it back
        node.right = dfs(node.right);  // same for right

        // NOW check: is this node a leaf, and does it match target?
        // decide what to return: either `node` itself, or null
        if (!node.left && !node.right && node.val === target) {
            return null
        }
        return node

    }

    return dfs(root);
};