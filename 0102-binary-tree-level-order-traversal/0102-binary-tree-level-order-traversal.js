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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // bfs
    const res = []
    if (!root) return res;
    const q = [root];
    while (q.length) {
        let level = q.length;
        const levelVals = []
        while (level--) {
            const node = q.shift();
            levelVals.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(levelVals);
    }
    return res;
};