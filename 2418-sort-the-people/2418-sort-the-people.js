var sortPeople = function (names, heights) {
    let nhs = names.map((_, i) => [names[i], heights[i]])
    return nhs
        .sort(([n1, h1], [n2, h2]) => h2 - h1)
        .map(e => e[0])
};
