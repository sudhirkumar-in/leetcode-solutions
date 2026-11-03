/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let m = {}
    for (const d of deck) {
        if (!(d in m)) m[d] = 0;
        m[d] = m[d] + 1;
    }
    const freq = Object.values(m);
    const gcdofreq = freq.reduce((result, num) => gcd(result, num));
    console.log(freq, gcdofreq)
    return gcdofreq > 1
};
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}