/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let orgNum = num;
    let count = 0;
    while (num) {
        const d = num % 10;
        num = Math.trunc(num / 10);
        if (orgNum % d == 0) count++;
    }
    return count;
};