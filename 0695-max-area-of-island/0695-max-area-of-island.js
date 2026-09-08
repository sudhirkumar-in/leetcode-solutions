/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    const row = grid.length;
    const col = grid[0].length;
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    for (let m = 0; m < row; m++) {
        for (let n = 0; n < col; n++) {
            if (grid[m][n] === 1) {

                maxArea = Math.max(maxArea, dfs(m, n))
            }
        }
    }

    function dfs(m, n) {
        //edge
        if (!(m >= 0 && m < row && n >= 0 && n < col)) return 0
        if (grid[m][n] === 0) return 0;

        grid[m][n] = 0;
        let area = 1;
        // make neighbour to "0";
        for (const [dx, dy] of dirs) {
            area += dfs(m + dx, n + dy);
        }
        return area;
    }
    return maxArea
};