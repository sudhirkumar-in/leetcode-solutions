/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    let count = 0;
    let sum = 0;

    for (const num of s) {
        if (num == 1) {
            count++;
            sum += count;
        } else {
            count = 0;
        }
    }

    return sum % (Math.pow(10, 9) + 7);
};