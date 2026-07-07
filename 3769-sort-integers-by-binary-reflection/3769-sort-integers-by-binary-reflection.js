/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function (nums) {
    return nums.map(v => [v, binaryRev(v)]).sort((a, b) => (a[1] - b[1]) || (a[0] - b[0])).map(v => v[0]);
};
const cache = {};
function binaryRev(v) {
    if (cache[v]) {
        return cache[v];
    }
    let bin = Number(v).toString(2);
    let val = parseInt(bin.split('').reverse().join(''), 2)
    cache[v] = val;
    return val;
}