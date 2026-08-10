/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (m * n !== original.length) return []

    let g = Array.from({ length: m }, () => new Array(n))
    let k = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            g[i][j] = original[k++]
        }
    }


    return g
};