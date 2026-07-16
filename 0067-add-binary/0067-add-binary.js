/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const firstNum = BigInt("0b" + a, 2);
    const secondNum = BigInt("0b" + b, 2);
    const sum = firstNum + secondNum;
    const sumBin = sum.toString(2);
    return sumBin;
};