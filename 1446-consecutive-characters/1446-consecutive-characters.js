/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let left = 0;
    let power = 0;
    let count = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[left] == s[right]) {
            count++;
        } else {
            power = Math.max(power, count);
            left = right;
            count = 1
            // reset
        }
    }
    // remaining 
    power = Math.max(power, count);
    return power
};