function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const r = image.length;
    const c = image[0].length;
    const originalColor = image[sr][sc];

    // Important edge case
    if (originalColor === color) {
        return image;
    }
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    function dfs(i, j) { // because we have to go to neighbour of a cell
        // edge case 
        if (i < 0 || i >= r || j < 0 || j >= c) return;


        // visited or modified the current cell to color
        if (image[i][j] !== originalColor) {
            return;
        }
        image[i][j] = color;
        // now it neighbour cell
        for (const [ni, nj] of dirs) {
            dfs(i + ni, j + nj);
        }


    }
    dfs(sr, sc);
    return image;
};