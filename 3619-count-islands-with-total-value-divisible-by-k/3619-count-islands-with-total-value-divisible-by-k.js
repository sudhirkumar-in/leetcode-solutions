/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function (grid, k) {
    const m = grid.length
    const n = grid[0].length
    let count = 0;
    const vis = Array.from({ length: m }, () => new Array(n).fill(false))
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    function dfs(i, j) {
        vis[i][j] = true;
        let area = grid[i][j]
        for (const [di, dj] of dirs) {
            const ni = di + i;
            const nj = dj + j;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n //
                && grid[ni][nj] !== 0 //
                && !vis[ni][nj]) {
                area += dfs(ni, nj)
            }
        }
        return area
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0 && !vis[i][j]) {
                // start the island
                let islandArea = dfs(i, j);
                if (islandArea % k == 0) {
                    count++;
                }
            }
        }
    }
    return count;
};