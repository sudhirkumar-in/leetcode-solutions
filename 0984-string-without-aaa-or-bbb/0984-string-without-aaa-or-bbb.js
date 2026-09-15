/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
    let result = '';

    while (a > 0 || b > 0) {
        if (result.length >= 2 && result.at(-1) == result.at(- 2)) {

            if (result.at(-1) == 'a') {
                result += 'b';
                b--;
            } else {
                result += 'a';
                a--;
            }
        } else {
            if (a >= b) {
                result += 'a';
                a--;
            } else {
                result += 'b';
                b--;
            }
        }
    }

    return result;
};