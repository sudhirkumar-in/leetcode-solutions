/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var calculateScore = function (a, b) {

    const s1 = a.toString('2').replaceAll('0', '').length;
    const s2 = b.toString('2').replaceAll('0', '').length;
    if (s1 >= s2) {
        return s1 * s2
    } else {
        return Math.trunc(s2 / s1)
    }
};