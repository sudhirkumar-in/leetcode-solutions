/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
    let mid = Math.trunc(num / 3);

    if (mid * 3 === num) {
        return [mid - 1, mid, mid + 1];
    } else {
        return []
    }
};