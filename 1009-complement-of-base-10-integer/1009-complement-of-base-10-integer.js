/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    const comp = n.toString(2).split('').map(v => v == '1' ? 0 : 1).join('')
    return parseInt(comp, 2);
};