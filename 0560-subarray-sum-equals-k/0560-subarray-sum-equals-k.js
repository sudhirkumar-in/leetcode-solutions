/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    /* we know 
    subarrsum(l,r) = p(r) - p(l-1)

    aka k = curent - prev
    so prev = current - k
    */
    let prefix = 0;
    let count = 0;
    const map = new Map();
    map.set(0, 1);

    for (const num of nums) {
        prefix += num;
        let prev = prefix - k;
        if (map.has(prev)) {
            count += map.get(prev);
        }
        map.set(prefix, (map.get(prefix) ?? 0) + 1)
    }
    return count;
};