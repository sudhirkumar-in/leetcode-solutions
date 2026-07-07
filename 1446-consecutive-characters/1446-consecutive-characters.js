/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    // let chars = s.split('');
    let best = 0;
    let count = 1;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            count += 1;
        } else {
            best = Math.max(best, count);
            count = 1;

        }
    }
    best = Math.max(best, count)
    return best;
};