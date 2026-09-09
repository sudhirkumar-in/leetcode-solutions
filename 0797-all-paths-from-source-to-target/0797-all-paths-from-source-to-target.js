/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const result = [];
    const path = [];

    function dfs(node) {
        path.push(node);

        if (node === graph.length - 1) {
            result.push([...path]);
            path.pop();
            return;
        }

        for (const next of graph[node]) {
            dfs(next);
        }

        path.pop();
    }

    dfs(0);

    return result;
};
