/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let strsWithKey = strs.map(v => ({ v, k: v.split('').sort().join('') }));
    const group = Object.groupBy(strsWithKey, ({ k }) => k);
    let result = Object.values(group).map(g=>g.map(val=>val.v));
    return result

};