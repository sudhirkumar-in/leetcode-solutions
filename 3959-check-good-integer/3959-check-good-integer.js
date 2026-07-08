/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    let digitSum = 0;
    let squareSum = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.trunc(n / 10);
        digitSum += digit;
        squareSum += (digit * digit);
    }
    return (squareSum - digitSum) >= 50
};