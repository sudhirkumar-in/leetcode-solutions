/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let num1pointer = num1.length - 1;
    let num2pointer = num2.length - 1;
    let carry = 0;
    let stack = [];
    let sum = 0;
    for (; num1pointer >= 0 && num2pointer >= 0; num1pointer--, num2pointer--) {
        sum = carry + (1 * num1[num1pointer]) + (1 * num2[num2pointer])
        if (sum >= 10) {
            stack.unshift(sum % 10);
            carry = 1;
        } else {
            stack.unshift(sum);
            carry = 0;
        }

    }
    for (; num1pointer >= 0; num1pointer--) {
        sum = carry + (1 * num1[num1pointer]);
        if (sum >= 10) {
            stack.unshift(sum % 10);
            carry = 1;
        } else {
            stack.unshift(sum);
            carry = 0;
        }
    }
    for (; num2pointer >= 0; num2pointer--) {
        sum = carry + (1 * num2[num2pointer]);
        if (sum >= 10) {
            stack.unshift(sum % 10);
            carry = 1;
        } else {
            stack.unshift(sum);
            carry = 0;
        }
    }
    // console.log(stack)
    if(carry){
        stack.unshift(carry);
    }
    return stack.join("");
};