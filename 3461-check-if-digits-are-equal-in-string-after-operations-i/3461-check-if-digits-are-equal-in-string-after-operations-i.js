/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    // helper
    const rem = (a, b) => (a + b) % 10
    let target = s;
    while (target.length > 2) {
        let temp = ''
        for (let i = 0; i < target.length - 1; i++) {
            temp += '' + rem(+target[i], +target[i + 1])
        }
        target = temp;
    }
    // now length is 2 
    return target[0] === target[1]
};