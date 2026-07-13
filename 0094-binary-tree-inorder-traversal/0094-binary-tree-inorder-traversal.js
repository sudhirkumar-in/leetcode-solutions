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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    function* dfsIn(r) {
        if (!r) return;
        yield *dfsIn(r.left)
        yield r.val
        yield *dfsIn(r.right)
    }
    return [...dfsIn(root)];
};