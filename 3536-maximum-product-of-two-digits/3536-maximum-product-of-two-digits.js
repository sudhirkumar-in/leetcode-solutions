/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let digitarray = n.toString(10).split('').sort().map(Number);
    return digitarray.at(-1) * digitarray.at(-2)
};