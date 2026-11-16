var sortTheStudents = function (g, k) {
    return g.sort((row1, row2) => row2[k] - row1[k])
};
