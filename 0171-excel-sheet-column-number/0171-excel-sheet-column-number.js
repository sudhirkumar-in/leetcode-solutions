/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const getNumber = (ch) => ch.codePointAt() - 64;// A = 65
    let len = columnTitle.length - 1;
    let sum = 0;
    for (let i = len; i >= 0; i--) {
        let power = len - i;
        const num = getNumber(columnTitle[i]);
        console.log(num, power);
        sum += num * Math.pow(26, power);
    }
    return sum
};