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
var maxDepth = function (root) {
    if (!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    // What should you return here?
    return 1 + Math.max(left, right);
};

var maxDepth22 = function (root) {
    if (!root) return 0;
    let levelCount = 0;
    // bfs
    let q = [root]
    while (q.length) {
        // increase the levelCount
        levelCount++;
        let level = q.length;
        while (level--) {
            const node = q.shift();
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }

    }
    return levelCount;
};