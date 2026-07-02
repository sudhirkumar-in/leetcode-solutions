/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false;
    let set = new Set([2, 3, 5]);
    let npSet = primeFactors(n);
    const merged = set.union(npSet);

    return merged.size == 3
};


function primeFactors(n) {
    const pSet = new Set();

    while (n % 2 === 0) {
        pSet.add(2);
        n /= 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            pSet.add(i);
            n /= i;
        }
    }

    if (n > 1) {
        pSet.add(n);
    }

    return pSet;
}
