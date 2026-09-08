/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
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
            if (grid[m][n] === "1") {
                count++;
                dfs(m, n) // make 1 to zero
            }
        }
    }

    function dfs(m, n) {
        //edge
        if (!(m >= 0 && m < row && n >= 0 && n < col)) return
        if (grid[m][n] === "0") return;

        grid[m][n] = "0";
        // make neighbour to "0";
        for (const [dx, dy] of dirs) {
            dfs(m + dx, n + dy);
        }

    }
    return count
};