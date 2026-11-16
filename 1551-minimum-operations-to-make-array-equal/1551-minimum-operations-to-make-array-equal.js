// 1. elements = [ 2 * i + 1,  where i = 0  .. n-1  ]
// 2. make equal
// 3. rule: pour from one (-1) to another (+1)

var minOperations = function (n) {
    let f = 2 * 0 + 1
    let l = 2 * (n - 1) + 1
    let mid = (f + l) / 2
    let sum = 0

    for (let i = 0; i < Math.trunc(n / 2); i++) {
        let x = 2 * i + 1
        sum += mid - x
    }

    return sum
}

var minOperations444 = function (n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 2 * i + 1;
    }
    return Math.trunc(sum / 4);
};

var minOperations222222 = function (n) {
    let sum = 0;
    for (let L = 0, R = n - 1; L < R; L++, R--) {
        let lRes = 2 * L + 1;
        let rRes = 2 * R + 1;
        sum += rRes - lRes;
    }
    return sum / 2;
};

var minOperations333333 = function (n) {
    if (n % 2 == 0) {
        return (n * n) / 4;
    } else {
        return (n * n - 1) / 4;
    }
};
