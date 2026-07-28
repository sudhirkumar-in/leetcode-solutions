/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0;
    for (let n = 1; n <= num; n++) {
        const sum = n.toString().split('').map(Number).reduce((a, v) => a + v, 0);
        if (sum % 2 === 0) {
            count++;
        }
    }
    return count;
};