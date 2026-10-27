function createGrid(m: number, n: number): string[] {
    const g = //
        Array.from({ length: m }, () => Array(n).fill('#'));

    // 1st row
    g[0].fill('.');

    // last column
    for (let i = 1; i < m; i++) {
        g[i][n - 1] = '.';
    }

    return g.map(row => row.join(''));
}
