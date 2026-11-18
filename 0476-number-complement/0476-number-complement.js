var findComplement = function (n) {
    // 101,  5
    let m = n
    let ct = 0

    while (m) {
        m >>= 1
        ct++
    }

    const mask = (1 << ct) - 1; //  1000-1=111,    8-1=7
    // 111

    // 101  ^ 111 => 010,   2
    const complement = n ^ mask;
    return complement;
};
