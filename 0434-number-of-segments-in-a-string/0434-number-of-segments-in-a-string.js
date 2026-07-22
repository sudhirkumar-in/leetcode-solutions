/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    return s.trim().length && s.trim().split(" ").filter(String).length
};