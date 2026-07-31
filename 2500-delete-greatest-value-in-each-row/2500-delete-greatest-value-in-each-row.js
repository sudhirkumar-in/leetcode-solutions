/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let m = grid.length
    let n = grid[0].length

    for (let i = 0; i < m; i++) {
        grid[i].sort((a, b) => a - b)
    }

    let s = 0
    for (let j = 0; j < n; j++) {
        let max = -Infinity
        for (let i = 0; i < m; i++) {
            max = Math.max(max, grid[i][j])
        }
        s += max
    }

    return s
};