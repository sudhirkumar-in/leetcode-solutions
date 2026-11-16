var pivotArray = function (a, pivot) {
    let smalls = a.filter(x => x < pivot)
    let equals = a.filter(x => x === pivot)
    let bigger = a.filter(x => x > pivot)

    return [...smalls, ...equals, ...bigger]
};
