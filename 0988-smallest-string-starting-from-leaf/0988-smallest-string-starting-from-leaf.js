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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    // put all string into res
    const res = [];
    const getAscii = (val) => String.fromCharCode(97 + val);
    function dfs(node, path) {
        // leaf node 
        if (!node) return;

        if (!node.left && !node.right) {
            res.push(getAscii(node.val) + path);
            return;
        }
        if (node.left) {
            dfs(node.left, getAscii(node.val) + path)
        }
        if (node.right) {
            dfs(node.right, getAscii(node.val) + path)
        }
    }
    dfs(root, '')
    res.sort()
    // console.log(res);
    return res[0];
};