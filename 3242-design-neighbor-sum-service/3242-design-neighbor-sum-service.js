const ADJ = [
    [0, -1], // left
    [0, 1], // right
    [-1, 0], // up
    [1, 0], // down
];

const DIAG = [
    [-1, -1], // lt
    [1, -1],  // rt
    [-1, 1], // lb
    [1, 1],   // rb
];

class NeighborSum {
    indexMap = {};
    g;

    constructor(g) {
        this.g = g
        const m = g.length;
        const n = g[0].length;

        let { indexMap } = this

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const e = g[i][j];
                indexMap[e] = [i, j];
            }
        }
    }

    adjacentSum(e) {
        let { indexMap, g } = this

        const [i, j] = indexMap[e];
        let s = 0;

        for (const [dx, dy] of ADJ) {
            const ni = i + dx;
            const nj = j + dy;
            s += g[ni]?.[nj] || 0;
        }

        return s;
    };

    diagonalSum(e) {
        let { indexMap, g } = this

        const [i, j] = indexMap[e];
        let s = 0;

        for (const [dx, dy] of DIAG) {
            const ni = i + dx;
            const nj = j + dy;
            s += g[ni]?.[nj] || 0;
        }

        return s;
    };
};
