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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const result = []

    const dfs = (node, path, remaining) => {
        if (!node) return
        path.push(node.val)
        remaining -= node.val
        if (!node.left && !node.right) {
            if (remaining == 0) {
                result.push([...path])
            }
        }
        dfs(node.left, path, remaining);
        dfs(node.right, path, remaining);
        path.pop();
    }
    dfs(root, [], targetSum);
    return result;

};