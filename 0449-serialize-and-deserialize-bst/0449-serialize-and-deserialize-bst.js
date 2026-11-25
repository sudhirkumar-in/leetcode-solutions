/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function (root) {
    this.vals = [];

    function dfs(n) {
        if (!n) return this.vals.push(null);

        this.vals.push(n.val);

        dfs(n.left);
        dfs(n.right);
    };

    dfs(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function () {
    let i = 0;

    function build() {
        if (i > this.vals.length) return null

        let v = this.vals[i]
        i++

        if (v === null) return null
        else {
            let lRes = build()
            let rRes = build()
            return new TreeNode(v, lRes, rRes);
        }
    };

    return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



