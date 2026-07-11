/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const col = grid[0].length;
    const row = grid.length;
    let island = 0;
   
    const dfs = (r, c) => {
        if (grid[r][c] === "0") {
            return;
        }
        // made visited;
        grid[r][c] = "0";
        if (c + 1 < col) {
            dfs(r, c + 1);
        }
        if (r + 1 < row) {
            dfs(r + 1, c);
        }
        if (r > 0) {
            dfs(r - 1, c)
        }
        if (c > 0) {
            dfs(r, c - 1);
        }
    }
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === "1") {
                island += 1;
                dfs(r, c);//
            }
        }
    }
    return island;
};