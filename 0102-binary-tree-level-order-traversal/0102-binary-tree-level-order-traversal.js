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
    const queue = new Queue();
    root && queue.enqueue(root);
    const res = [];
    while (queue.size() > 0) {
        let levelSize = queue.size();
        let levelVals = []
        while (levelSize--) {

            const node = queue.dequeue();

            levelVals.push(node.val);
            node.left && queue.enqueue(node.left);
            node.right && queue.enqueue(node.right);
        }
        res.push(levelVals)
    }
    return res
};