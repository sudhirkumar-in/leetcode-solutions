var hammingDistance = function (a, b) {
    // how many bits are different
    let ct = 0;

    while (a > 0 || b > 0) {
        if ((a & 1) !== (b & 1)) ct++;
        a >>= 1
        b >>= 1
    }

    return ct;
};
