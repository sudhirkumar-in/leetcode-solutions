var licenseKeyFormatting = function (S, K) {
    // "5F3Z-2e-9-w"
    S = S.toUpperCase().replaceAll("-", "");
    // "5F3Z2E9W"

    let n = S.length
    if (!n) return ""

    let res = "";

    while (n > K) {
        let lastKChars = S.slice(n - K, n)
        res = "-" + lastKChars + res;
        n -= K;
    }

    let firstKOrLessChars = S.slice(0, n)
    res = firstKOrLessChars + res;

    return res;
};
