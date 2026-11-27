var countGoodSubstrings = function (s) {
    let n = s.length;
    let ct = 0;
    let w = []; // window

    for (let i = 0; i < n; i++) {
        w.push(s[i]);

        if (i >= 2) {
            if (new Set(w).size === 3) {
                ct++; // distinct
            }

            w.shift();
        }
    }

    return ct;
};
