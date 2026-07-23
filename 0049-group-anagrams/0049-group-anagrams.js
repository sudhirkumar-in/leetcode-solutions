/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    return Object.values(
        Object.groupBy(strs, s => s.split('').sort().join(''))
    );

};