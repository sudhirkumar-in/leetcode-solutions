/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinces = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;
            dfs(i);
        }
    }

    function dfs(city) {
        visited[city] = true;

        for (let next = 0; next < n; next++) {
            if (isConnected[city][next] === 1 && !visited[next]) {
                dfs(next);
            }
        }
    }
    return provinces

};