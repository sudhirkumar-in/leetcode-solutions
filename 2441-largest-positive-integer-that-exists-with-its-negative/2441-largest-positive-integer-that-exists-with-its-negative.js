var findMaxK = function (a) {
    let set = new Set(a);
    let res = -1;

    for (const e of set) {
        // its +ve and has -ve
        if (e > 0 && set.has(-e)) {
            res = Math.max(res, e)
        }
    }

    return res;
};
