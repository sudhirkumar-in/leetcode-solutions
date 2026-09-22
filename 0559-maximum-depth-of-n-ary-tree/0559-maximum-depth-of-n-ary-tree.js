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
    function dfs(node) {
        if (!node) return 0;
        let max = 0;
        for (const child of node.children) {
            max = Math.max(max, dfs(child));
        }
        return 1 + max;
    }
    return dfs(root);
};