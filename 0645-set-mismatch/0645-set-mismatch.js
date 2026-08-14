/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const set = new Set();
    const res = []
    let numSum = 0
    for (const n of nums) {
        if (set.has(n)) {
            res.push(n)
        }
        set.add(n)
        numSum += n;
    }
    const n = nums.length;
    const sum = (n * (n + 1) / 2)
  
    const remain = sum - (numSum - res[0])
    res.push(remain);
    return res
};