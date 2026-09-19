/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    // bfs
    if (!root) return 0;
    let levelCount = 0;
    const q = [root];
    while (q.length) {
        let level = q.length;
        levelCount++;
        while (level--) {
            const node = q.shift();
            for (const childNode of node.children) {
                q.push(childNode);
            }
        }
    }
    return levelCount;
};