var maxWidthOfVerticalArea = function (points) {
    let X = points
        .map(([x, y]) => x)
        .sort((a, b) => a - b)

    let max = 0

    for (let i = 1; i < X.length; i++) {
        let w = X[i] - X[i - 1]
        max = Math.max(max, w)
    }

    return max;
};
