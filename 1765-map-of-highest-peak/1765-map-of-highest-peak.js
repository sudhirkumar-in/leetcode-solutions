/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {

    const m = isWater.length;
    const n = isWater[0].length;

    const dist = Array.from(
        { length: m },
        () => new Array(n).fill(-1)
    );

    const queue = [];
    let head = 0;

    // Water cells are the starting points
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    while (head < queue.length) {
        const [i, j] = queue[head++];

        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;

            if (
                ni >= 0 &&
                ni < m &&
                nj >= 0 &&
                nj < n &&
                dist[ni][nj] === -1
            ) {
                dist[ni][nj] = dist[i][j] + 1;
                queue.push([ni, nj]);
            }
        }
    }

    return dist;
};
