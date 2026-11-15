var countBalls = function (lo, hi) {
    let freq = new Map()

    for (let n = lo; n <= hi; n++) {
        let s = sumOfDigits(n)
        freq.set(s, (freq.get(s) ?? 0) + 1)
    }

    let maxf = Math.max(...freq.values());
    return maxf
};

let sumOfDigits = (num) =>
    ("" + num)
        .split("")
        .reduce((sum, digit) => sum + +digit, 0);
