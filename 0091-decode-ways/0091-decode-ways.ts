var numDecodings = function (s) {
    let memo = {};

    const bt = (i) => {
        if (memo[i] !== undefined) return memo[i];
        if (+s[i] === 0) return 0;
        if (i === s.length) return 1;

        let count = 0;

        if (i + 1 < s.length) {
            if (
                (+s[i] == 1 && +s[i + 1] <= 9) || // 10 - 19
                (+s[i] == 2 && +s[i + 1] <= 6) //    20 - 26
            ) {
                count += bt(i + 2);
            }

            if (+s[i + 1] === 0) {
                memo[i] = count;
                return count;
            }
        }

        count += bt(i + 1);

        memo[i] = count;
        return count;
    };

    return bt(0);
};
