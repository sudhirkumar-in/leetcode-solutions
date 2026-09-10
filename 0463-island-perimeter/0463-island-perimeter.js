/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const row = grid.length;
    const col = grid[0].length;
    let perimeter = 0;
    const vis = Array.from(
        { length: row },
        () => new Array(col).fill(false)
    );
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1 && !vis[i][j]) {
                dfs(i, j)
            }
        }
    }

    function dfs(i, j) {
        vis[i][j] = true;

        for (const [dx, dy] of dirs) {
            const newI = i + dx;
            const newJ = j + dy;

            if (newI < 0 || newI >= row || newJ < 0 || newJ >= col) {
                perimeter++;
            } else if (grid[newI][newJ] === 0) {
                perimeter++;
            } else if (!vis[newI][newJ]) {
                dfs(newI, newJ);
            }
        }


    }

    return perimeter;

};