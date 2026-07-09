/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function (nums) {
    const countFreq = new Map();
    for (const num of nums) {
        countFreq.set(num, (countFreq.get(num) ?? 0) + 1)
    }
    const freq = new Map();
    // count , [count,num]
    for (const [num, count] of countFreq) {
        if (freq.has(count)) {
            let [total, val] = freq.get(count)
            freq.set(count, [total + 1, val]);
        } else {
            freq.set(count, [1, num])
        }
    }
    console.log(countFreq)
    console.log(freq)
    for (const [_, [total, num]] of freq) {
        if (total == 1) {
            return num;
        }
    }
    return -1
};