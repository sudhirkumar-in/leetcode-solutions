// Surface area = Top + Bottom + exposed sides.
//  For each cell:
//      Top and bottom contribute 2 if the height is greater than zero.
//      Each of the four sides contributes the difference between the current height and its neighboring height, if positive.
//      If there is no neighbor(grid boundary), the neighboring height is 0.

var surfaceArea = function (g) {
    let area = 0;
    const n = g.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const h = g[i][j];

            if (h === 0) continue;

            area += 2; // Top and bottom

            area += h - (i - 1 < 0 ? 0 : Math.min(h, g[i - 1][j]));    //    north
            area += h - (i < n - 1 ? Math.min(h, g[i + 1][j]) : 0);     //  south
            area += h - (j > 0 ? Math.min(h, g[i][j - 1]) : 0);         //      west
            area += h - (j < n - 1 ? Math.min(h, g[i][j + 1]) : 0);     //  east
        }
    }

    return area;
};