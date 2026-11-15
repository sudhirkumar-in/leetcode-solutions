var findNonMinOrMax = function (a) {
    // remove smallest  & biggest
    a.sort((a, b) => a - b)

    a.shift()
    a.pop()

    // return any remaining number
    return a[0] ?? -1
};
