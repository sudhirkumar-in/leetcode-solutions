/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length
    const n = grid[0].length
    let haveOnes = false;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) haveOnes = true;
        }
    }
    // no fresh 
    if (haveOnes == false) return 0;
    const dirs = [
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0]
    ]
    const q = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                q.push([i, j]);
            }
        }
    }

    let minutes = 0;

    while (q.length > 0) {
        const size = q.length;

        for (let k = 0; k < size; k++) {
            // process one orange
            const [ri, rj] = q.shift();
            for (const [dx, dy] of dirs) {
                const newI = ri + dx;
                const newJ = rj + dy;
                if (newI >= 0 && newI < m && newJ >= 0 && newJ < n//
                    && grid[newI][newJ] === 1
                ) {
                    grid[newI][newJ] = 2
                    q.push([newI, newJ]);
                }
            }
        }


        minutes++;
    }






    //check if any fresh remain
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return minutes - 1;
};