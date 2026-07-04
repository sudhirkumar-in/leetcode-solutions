/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function (n) {
    return Math.floor(Math.log2(n + 1)) + 1;
    // return (n + 1).toString(2).length;
};