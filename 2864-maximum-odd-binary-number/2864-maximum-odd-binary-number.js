/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let total = s.length;
    let ones = 0;
    for (const char of s) {
        if (char == '1') ones += 1;
    }
    return ('1').repeat(ones - 1) + ('0').repeat(total - ones) + '1'
};