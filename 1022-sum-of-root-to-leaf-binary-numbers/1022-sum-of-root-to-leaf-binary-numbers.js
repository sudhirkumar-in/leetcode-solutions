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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    // leaf node is left and right is null
    let sum = 0
    dfs(root, '');
    return sum;
    function dfs(root, word) {
        if (root == null) {
            return;

        }
        word += root.val;
        if (root.left == null && root.right == null) {
            sum += parseInt(word, 2);
            return
        }
        dfs(root.left, word);
        dfs(root.right, word);
    }
};
