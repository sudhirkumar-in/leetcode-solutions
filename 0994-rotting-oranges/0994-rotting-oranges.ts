function orangesRotting(g: number[][]): number {
    const m = g.length;
    const n = g[0].length;

    const q: [number, number][] = [];

    // Put all initially rotten oranges into the queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] === 2) {
                q.push([i, j]);
            }
        }
    }

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    let head = 0;
    let minutes = 0;

    while (head < q.length) {
        const count = q.length - head;

        for (let k = 0; k < count; k++) {
            const [i, j] = q[head++];

            for (const [dx, dy] of dirs) {
                const ni = i + dx;
                const nj = j + dy;

                if (
                    ni >= 0 &&
                    ni < m &&
                    nj >= 0 &&
                    nj < n &&
                    g[ni][nj] === 1
                ) {
                    g[ni][nj] = 2;
                    q.push([ni, nj]);
                }
            }
        }

        // If we processed at least one level, one minute passed
        minutes++;
    }

    // Check whether any fresh oranges remain
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] === 1) {
                return -1;
            }
        }
    }

    return Math.max(0, minutes - 1);
}

