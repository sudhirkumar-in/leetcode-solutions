function findLucky(a: number[]): number {
    let freq = new Map();

    for (let e of a) {
        freq.set(e, (freq.get(e) || 0) + 1);
    }

    let max = -1;

    for (let [e, f] of freq) {
        if (e === f) {
            if (e > max) {
                max = e;
            }
        }
    }

    return max;
};
