/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    let unique = new Set(nums);
    for (let num of nums) {
        let revValue = rev(num);
        unique.add(revValue);
    }
    
    return unique.size;
};

function rev(num) {
    let res = 0;
    while (num > 0) {
        let digit = num % 10;
        res *= 10;
        res += digit;
        num /= 10;
        num = Math.trunc(num);
    }
    return res;
}