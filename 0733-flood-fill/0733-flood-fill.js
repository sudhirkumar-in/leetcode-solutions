/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const r = image.length;
    const c = image[0].length;
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    const q = [];
    const originalColor = image[sr][sc];
    // nothing to do 
    if (originalColor === color) { return image; }

    image[sr][sc] = color;
    q.push([sr, sc]);
    while (q.length) {
        // process
        const [i, j] = q.shift();
        // visited
        image[i][j] = color;
        for (const [ni, nj] of dirs) {
            const newRow = i + ni;
            const newCol = j + nj;

            if (
                newRow >= 0 &&
                newRow < r &&
                newCol >= 0 &&
                newCol < c &&
                image[newRow][newCol] === originalColor
            ) {
                q.push([newRow, newCol]);
            }
        }
    }
    return image;
};