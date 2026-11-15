var numberOfPoints = function (a) {
    const set = new Set();

    for (const [s, e] of a) {
        for (let x = s; x <= e; x++) {
            set.add(x);
        }
    }

    return set.size; // points where a car exists
};
