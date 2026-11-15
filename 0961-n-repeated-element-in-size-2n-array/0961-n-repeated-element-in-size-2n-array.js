var repeatedNTimes = function (a) {
    // 1 element is repeated n elements
    // other n are unique
    //      total = 2*n elements
    const n = a.length

    for (let i = 0; i <= n / 2; i++) {
        if (
            a[i] === a[i + 1] || //
            a[i] === a[i + 2] ||
            a[i] === a[i + 3]
        ) {
            return a[i];
        }
    }
};
