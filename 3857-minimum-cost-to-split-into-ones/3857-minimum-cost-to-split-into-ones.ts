function minCost(n: number): number {
    // split 6 into   6 ones

    // 1    5
    //     1   4
    //        1   3
    //            1  2
    //              1 1

    // 6 => 5 + 4 + 3 + 2 + 1

    return n * (n - 1) / 2
};
