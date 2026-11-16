var processQueries = function (queries, n) {
    let a = Array.from({ length: n }, (_, i) => i + 1);
    let res = [];

    queries.map((q) => {
        let j = a.indexOf(q);
        res.push(j);

        let e = a[j]
        a.splice(j, 1)
        a.unshift(e)
        // a = [a[j], ...a.slice(0, j), ...a.slice(j + 1)];
    });

    return res;
};
