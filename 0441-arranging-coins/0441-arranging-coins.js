var arrangeCoins222 = function (N) {
    // n * (n+1) / 2 <= N
    // n * (n+1)     <= 2*N

    let sq = Math.trunc(Math.sqrt(2 * N))

    let ct = 3
    while (ct--) {
        if ((sq * (sq + 1)) <= 2 * N) {
            return sq
        }
        sq--
    }

};

var arrangeCoins = function (n) {
    let cs = 0

    for (rowCoins = 1; ; rowCoins++) {
        cs += rowCoins

        if (cs > n) {
            return rowCoins - 1
        }
    }
}
