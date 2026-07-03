var pivotInteger = function (n) {
    let prefixSum = []
    let s = 0
    for (let x = 1; x <= n; x++) {
        s += x
        prefixSum.push(s)
    }

    let suffixSum = []
    s = 0
    for (let x = n; x >= 1; x--) {
        s += x
        suffixSum.unshift(s)
    }

    for (let x = 1; x <= n; x++) {
        let i = x - 1
        if (prefixSum[i] === suffixSum[i]) {
            return x
        }
    }

    return -1
};
