/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let stop = -1;
    for (let l = num.length - 1; l >= 0; l--) {
        const digit = +num[l];
        if (digit % 2 !== 0) {
            stop = l;
            break;
        }
    }
    return num.slice(0, stop + 1);
};