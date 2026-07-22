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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    function trimRange(node) {
        if (node == null) return null;
        if (node.val < low) {
            return trimRange(node.right);
        }
        if (node.val > high) {
            return trimRange(node.left);
        }
        node.left = trimRange(node.left);
        node.right = trimRange(node.right);
        return node;
    }
    return trimRange(root);
};