/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    const row = matrix.length
    const col = matrix[0].length
    const mat2 = Array.from({ length: col }, () => new Array(row))
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            mat2[c][r] = matrix[r][c]
        }
    }
    return mat2;
};