var flipAndInvertImage = function (g) {
    return g
        .map((row) =>
            row
                .reverse()
                .map(x => x ^ 1)
        )
};
