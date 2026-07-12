/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const sorted = arr.toSorted((a, b) => a - b);
    
    const map = new Map();
    let rank = 1;
    for (let i = 0; i < sorted.length; i++) {
        const curr = sorted[i];
        if (i == 0) {
            map.set(curr, rank);
            continue;
        }

        const prev = sorted[i - 1];
        if (prev == curr) {
            map.set(curr, rank);
        } else {
            rank += 1
            map.set(curr, rank);
        }
    }
    return arr.map(v => map.get(v));
};