/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    const sum = (n * (n + 1)) / 2
    let left = 0;
    let right = 0;
    // left + right = sum
    // right = sum - left
    
    for (let i = 0; i <= n; i++) {
        left += i;
        right = sum - left + i;
        
        if (left == right) {
            return i
        }
    }
    return -1
};