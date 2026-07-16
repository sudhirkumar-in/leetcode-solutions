/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
    let maxi = 0;
    let prefixGcd = []
    for (const num of nums) {
        maxi = Math.max(maxi, num);
        const numMaxi = gcd(num, maxi);
        prefixGcd.push(numMaxi);
    }

    prefixGcd = prefixGcd.sort((a, b) => a - b);

    let sum = 0;
    const len = prefixGcd.length;
    for (let i = 0; i * 2 < len - 1; i++) {
        const first = prefixGcd[i];
        const last = prefixGcd[len - 1 - i]
        const pairGcd = gcd(first, last);
        sum += pairGcd;
    }

    return sum;
};

function gcd(x, y) {
    if (y == 0) {
        return x;
    }
    return gcd(y, x % y);
}