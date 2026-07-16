/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let result = [];
    let carry = 1; // its because we have to plus one
    for (let last = digits.length - 1; last >= 0; last--) {
        const sum = digits[last] + carry;
        if (sum >= 10) {
            carry = 1;
            const digit = sum % 10;
            result.unshift(digit);
        } else {
            carry = 0;
            result.unshift(sum);
        }

    }
    if (carry) {
        result.unshift(carry);
    }
    return result;
};
