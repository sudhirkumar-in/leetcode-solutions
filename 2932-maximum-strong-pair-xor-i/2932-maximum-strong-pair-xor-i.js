var maximumStrongPairXor = function (a) {
    let max = 0;

    for (const x of a) {
        for (const y of a) {
            // as per question
            if (Math.abs(x - y) <= Math.min(x, y)) {
                max = Math.max(max, x ^ y);
            }
        }
    }

    return max;
};
