/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    const row = mat.length
    const col = mat[0].length
    let sum = 0 ;
    for (let r = 0; r < row; r++) {
        sum += mat[r][r] + mat[r][row - 1 - r]
    }
    if (row % 2 === 1) {
        const midR = Math.trunc(row / 2)
        const midC = Math.trunc(col / 2)
        sum -= mat[midR][midC]
    }
    return sum
};